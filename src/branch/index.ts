/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * The repository branch to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch#branch Branch#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch#id Branch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch#repository Branch#repository}
  */
  readonly repository: string;
  /**
  * The branch name to start from. Defaults to 'main'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch#source_branch Branch#source_branch}
  */
  readonly sourceBranch?: string;
  /**
  * The commit hash to start from. Defaults to the tip of 'source_branch'. If provided, 'source_branch' is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch#source_sha Branch#source_sha}
  */
  readonly sourceSha?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch github_branch}
*/
export class Branch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_branch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Branch to import
  * @param importFromId The id of the existing Branch that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Branch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/branch github_branch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchConfig
  */
  public constructor(scope: Construct, id: string, config: BranchConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.2.0',
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
    this._branch = config.branch;
    this._id = config.id;
    this._repository = config.repository;
    this._sourceBranch = config.sourceBranch;
    this._sourceSha = config.sourceSha;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // sha - computed: true, optional: false, required: false
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // source_branch - computed: false, optional: true, required: false
  private _sourceBranch?: string; 
  public get sourceBranch() {
    return this.getStringAttribute('source_branch');
  }
  public set sourceBranch(value: string) {
    this._sourceBranch = value;
  }
  public resetSourceBranch() {
    this._sourceBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchInput() {
    return this._sourceBranch;
  }

  // source_sha - computed: true, optional: true, required: false
  private _sourceSha?: string; 
  public get sourceSha() {
    return this.getStringAttribute('source_sha');
  }
  public set sourceSha(value: string) {
    this._sourceSha = value;
  }
  public resetSourceSha() {
    this._sourceSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceShaInput() {
    return this._sourceSha;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
      source_branch: cdktf.stringToTerraform(this._sourceBranch),
      source_sha: cdktf.stringToTerraform(this._sourceSha),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_branch: {
        value: cdktf.stringToHclTerraform(this._sourceBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_sha: {
        value: cdktf.stringToHclTerraform(this._sourceSha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
