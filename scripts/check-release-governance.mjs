import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => JSON.parse(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'));
const readText = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const matrix = read('compatibility-matrix.v1.json');
const gate = read('release-gate.v1.json');
const fixtures = read('fixtures/release-readiness.v1.json');
const governance = readText('release-governance.md');
const template = readText('templates/contract-change-proposal.md');

assert.equal(matrix.schema_version, 1);
assert.equal(matrix.publication_status, 'not_verified');
assert.equal(matrix.policy.package_versions_are_independent, true);
assert.equal(matrix.policy.wider_range_requires_lowest_and_highest_fixture_runs, true);
assert.equal(matrix.plugin_compatibility_requirements.core_range_encoded_in_current_plugin_manifest, false);
assert.equal(matrix.plugin_compatibility_requirements.release_allowed_without_additional_matrix_ranges, false);
assert(matrix.plugin_instances.length > 0);
for (const plugin of matrix.plugin_instances) {
  assert(plugin.protocol_versions.length > 0 && plugin.activity_schema_versions.length > 0);
  for (const key of ['registry_package_range', 'core_range', 'domain_package_range', 'framework_range', 'external_driver_range']) assert.equal(typeof plugin[key], 'string');
  assert.equal(plugin.npm_publication, 'not-verified');
}
for (const dimension of ['protocol-package-and-contract', 'core-package-and-runtime-contract', 'registry-and-plugin-manifest-contract', 'domain-engine-and-activity-schema', 'host-adapter-and-framework-peer', 'external-driver-and-vendor-dependencies']) {
  assert(matrix.required_dimensions.includes(dimension), `compatibility dimension missing: ${dimension}`);
}
const byRepository = new Map(matrix.components.map(component => [component.repository, component]));
for (const repository of ['protocol', 'core', 'registry', 'quiz', 'flashcards', 'renderer-dom']) {
  const component = byRepository.get(repository);
  assert(component, `matrix row missing: ${repository}`);
  assert.equal(component.status, 'implemented-in-repository');
  assert.match(component.package_version, /^\d+\.\d+\.\d+$/);
  assert.match(matrix.source_commits[repository] ?? '', /^[0-9a-f]{40}$/, `source commit missing: ${repository}`);
  assert.equal(component.npm_publication, 'not-verified');
  for (const range of Object.values(component.peer_requirements)) assert.equal(typeof range, 'string');
}
for (const repository of ['react', 'vue', 'svelte', 'layout-elk', 'graph-cytoscape', 'simulation-matter', 'simulation-rapier']) {
  const component = byRepository.get(repository);
  assert(component, `planned adapter/driver row missing: ${repository}`);
  assert.equal(component.status, 'planned-no-package-manifest');
  assert.equal(component.package_name, null);
  assert(Array.isArray(component.required_before_release) && component.required_before_release.length >= 4);
}

assert.equal(gate.schema_version, 1);
assert.equal(gate.block_release_when_any_required_evidence_is_missing_or_failed, true);
for (const stage of ['ownership-and-proposal', 'compatibility-ranges', 'shared-conformance', 'packed-consumer', 'migration-and-deprecation', 'identity-and-publication']) {
  assert(gate.required_stages.some(item => item.id === stage), `release gate stage missing: ${stage}`);
}
assert(gate.shared_fixture_families.some(item => item.owner === 'protocol' && item.cases.includes('cross-language-diagnostics')));
assert.deepEqual(gate.release_order, ['protocol', 'content-node-events-registry', 'core', 'domain-engines', 'hosts-and-adapters', 'optional-drivers', 'product-consumers']);
assert.equal(gate.publishing_is_out_of_scope_for_backlog_and_ci, true);

assert.equal(fixtures.fixture_version, 1);
for (const kind of ['valid', 'invalid', 'boundary']) assert(fixtures.cases.some(item => item.kind === kind), `fixture kind missing: ${kind}`);
const readiness = new Map(fixtures.cases.map(item => [item.id, item]));
const complete = readiness.get('complete-evidence');
assert.equal(complete.expected, 'release-ready');
for (const field of ['matrix_complete', 'oldest_and_newest_pass', 'outside_range_rejected', 'shared_fixtures_pass', 'migration_documented', 'npm_name_verified']) assert.equal(complete[field], true);
for (const id of ['missing-adapter-range', 'plugin-without-core-range', 'shared-fixture-failure', 'breaking-change-without-migration', 'npm-name-not-verified']) assert.equal(readiness.get(id).expected, 'blocked');
assert.equal(readiness.get('minimum-inclusive').expected, 'supported');
assert.equal(readiness.get('maximum-below-exclusive').expected, 'supported');
assert.equal(readiness.get('below-minimum').expected, 'rejected');
assert.equal(readiness.get('exclusive-major-boundary').expected, 'rejected');

for (const phrase of ['two subsequent minor releases and 90 days', 'npm view', 'lowest and highest', 'shared', 'never run `npm publish`']) {
  assert(governance.includes(phrase), `governance policy missing: ${phrase}`);
}
for (const section of ['## Compatibility and versioning', '## Migration, deprecation and rollback', '## Security, privacy and accessibility', '## Conformance and release gate', '## Package identity and publication readiness']) {
  assert(template.includes(section), `proposal template section missing: ${section}`);
}

console.log(`Release governance: ${matrix.components.length} compatibility rows, ${gate.required_stages.length} gate stages and ${fixtures.cases.length} readiness fixtures passed.`);
