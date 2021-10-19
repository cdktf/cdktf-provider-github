const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "integrations/github@~> 4.0",
  cdktfVersion: '^0.7',
  constructsVersion: "^10.0.0",
  minNodeVersion: "12.19.0"
});

project.synth();
