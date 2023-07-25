/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories#id DataGithubRepositories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories#include_repo_id DataGithubRepositories#include_repo_id}
  */
  readonly includeRepoId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories#query DataGithubRepositories#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories#results_per_page DataGithubRepositories#results_per_page}
  */
  readonly resultsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories#sort DataGithubRepositories#sort}
  */
  readonly sort?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories github_repositories}
*/
export class DataGithubRepositories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repositories";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.32.0/docs/data-sources/repositories github_repositories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoriesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repositories',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.32.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._includeRepoId = config.includeRepoId;
    this._query = config.query;
    this._resultsPerPage = config.resultsPerPage;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_repo_id - computed: false, optional: true, required: false
  private _includeRepoId?: boolean | cdktf.IResolvable; 
  public get includeRepoId() {
    return this.getBooleanAttribute('include_repo_id');
  }
  public set includeRepoId(value: boolean | cdktf.IResolvable) {
    this._includeRepoId = value;
  }
  public resetIncludeRepoId() {
    this._includeRepoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRepoIdInput() {
    return this._includeRepoId;
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
    return this._query;
  }

  // repo_ids - computed: true, optional: false, required: false
  public get repoIds() {
    return this.getNumberListAttribute('repo_ids');
  }

  // results_per_page - computed: false, optional: true, required: false
  private _resultsPerPage?: number; 
  public get resultsPerPage() {
    return this.getNumberAttribute('results_per_page');
  }
  public set resultsPerPage(value: number) {
    this._resultsPerPage = value;
  }
  public resetResultsPerPage() {
    this._resultsPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsPerPageInput() {
    return this._resultsPerPage;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_repo_id: cdktf.booleanToTerraform(this._includeRepoId),
      query: cdktf.stringToTerraform(this._query),
      results_per_page: cdktf.numberToTerraform(this._resultsPerPage),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }
}
