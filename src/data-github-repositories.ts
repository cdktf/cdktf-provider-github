// https://www.terraform.io/docs/providers/github/r/data_github_repositories.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGithubRepositoriesConfig extends TerraformMetaArguments {
  readonly query: string;
  readonly sort?: string;
}

// Resource

export class DataGithubRepositories extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGithubRepositoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repositories',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._query = config.query;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_names - computed: true, optional: false, required: true
  public get fullNames() {
    return this.getListAttribute('full_names');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // names - computed: true, optional: false, required: true
  public get names() {
    return this.getListAttribute('names');
  }

  // query - computed: false, optional: false, required: true
  private _query: string;
  public get query() {
    return this._query;
  }
  public set query(value: string) {
    this._query = value;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string;
  public get sort() {
    return this._sort;
  }
  public set sort(value: string | undefined) {
    this._sort = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      query: this._query,
      sort: this._sort,
    };
  }
}
