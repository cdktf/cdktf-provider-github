// https://www.terraform.io/docs/providers/github/r/data_github_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGithubIpRangesConfig extends TerraformMetaArguments {
}

// Resource

export class DataGithubIpRanges extends TerraformDataSource {

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

  // git - computed: true, optional: false, required: true
  public get git() {
    return this.getListAttribute('git');
  }

  // hooks - computed: true, optional: false, required: true
  public get hooks() {
    return this.getListAttribute('hooks');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // importer - computed: true, optional: false, required: true
  public get importer() {
    return this.getListAttribute('importer');
  }

  // pages - computed: true, optional: false, required: true
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
