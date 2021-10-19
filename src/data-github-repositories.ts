// https://www.terraform.io/docs/providers/github/d/repositories.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repositories.html#query DataGithubRepositories#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repositories.html#sort DataGithubRepositories#sort}
  */
  readonly sort?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repositories.html github_repositories}
*/
export class DataGithubRepositories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repositories";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/repositories.html github_repositories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoriesConfig
  */
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

  // full_names - computed: true, optional: false, required: false
  public get fullNames() {
    return this.getListAttribute('full_names');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string | undefined; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string | undefined) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      query: cdktf.stringToTerraform(this._query),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }
}
