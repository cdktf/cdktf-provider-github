const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: 'integrations/github@~> 4.0',
  eslint: false,
});

project.synth();
