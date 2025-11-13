/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryPullRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request#base_repository DataGithubRepositoryPullRequest#base_repository}
  */
  readonly baseRepository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request#id DataGithubRepositoryPullRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request#number DataGithubRepositoryPullRequest#number}
  */
  readonly number: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request#owner DataGithubRepositoryPullRequest#owner}
  */
  readonly owner?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request github_repository_pull_request}
*/
export class DataGithubRepositoryPullRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_pull_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGithubRepositoryPullRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubRepositoryPullRequest to import
  * @param importFromId The id of the existing DataGithubRepositoryPullRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubRepositoryPullRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pull_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_pull_request github_repository_pull_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryPullRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryPullRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_pull_request',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.8.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseRepository = config.baseRepository;
    this._id = config.id;
    this._number = config.number;
    this._owner = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_ref - computed: true, optional: false, required: false
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }

  // base_repository - computed: false, optional: false, required: true
  private _baseRepository?: string; 
  public get baseRepository() {
    return this.getStringAttribute('base_repository');
  }
  public set baseRepository(value: string) {
    this._baseRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRepositoryInput() {
    return this._baseRepository;
  }

  // base_sha - computed: true, optional: false, required: false
  public get baseSha() {
    return this.getStringAttribute('base_sha');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // draft - computed: true, optional: false, required: false
  public get draft() {
    return this.getBooleanAttribute('draft');
  }

  // head_owner - computed: true, optional: false, required: false
  public get headOwner() {
    return this.getStringAttribute('head_owner');
  }

  // head_ref - computed: true, optional: false, required: false
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }

  // head_repository - computed: true, optional: false, required: false
  public get headRepository() {
    return this.getStringAttribute('head_repository');
  }

  // head_sha - computed: true, optional: false, required: false
  public get headSha() {
    return this.getStringAttribute('head_sha');
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

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // maintainer_can_modify - computed: true, optional: false, required: false
  public get maintainerCanModify() {
    return this.getBooleanAttribute('maintainer_can_modify');
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // opened_at - computed: true, optional: false, required: false
  public get openedAt() {
    return this.getNumberAttribute('opened_at');
  }

  // opened_by - computed: true, optional: false, required: false
  public get openedBy() {
    return this.getStringAttribute('opened_by');
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_repository: cdktf.stringToTerraform(this._baseRepository),
      id: cdktf.stringToTerraform(this._id),
      number: cdktf.numberToTerraform(this._number),
      owner: cdktf.stringToTerraform(this._owner),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_repository: {
        value: cdktf.stringToHclTerraform(this._baseRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.numberToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
