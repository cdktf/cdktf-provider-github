// https://www.terraform.io/docs/providers/github/r/data_github_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubIpRangesConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataGithubIpRanges extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGithubIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git - computed: true, optional: false, required: false
  public get git() {
    return this.getListAttribute('git');
  }

  // hooks - computed: true, optional: false, required: false
  public get hooks() {
    return this.getListAttribute('hooks');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // importer - computed: true, optional: false, required: false
  public get importer() {
    return this.getListAttribute('importer');
  }

  // pages - computed: true, optional: false, required: false
  public get pages() {
    return this.getListAttribute('pages');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
