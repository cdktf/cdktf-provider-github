// https://www.terraform.io/docs/providers/github/r/branch.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch.html#branch Branch#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch.html#repository Branch#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch.html#source_branch Branch#source_branch}
  */
  readonly sourceBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch.html#source_sha Branch#source_sha}
  */
  readonly sourceSha?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/branch.html github_branch}
*/
export class Branch extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/branch.html github_branch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchConfig
  */
  public constructor(scope: Construct, id: string, config: BranchConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branch = config.branch;
    this._repository = config.repository;
    this._sourceBranch = config.sourceBranch;
    this._sourceSha = config.sourceSha;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch: string;
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
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
  public set sourceBranch(value: string ) {
    this._sourceBranch = value;
  }
  public resetSourceBranch() {
    this._sourceBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchInput() {
    return this._sourceBranch
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
    return this._sourceSha
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      repository: cdktf.stringToTerraform(this._repository),
      source_branch: cdktf.stringToTerraform(this._sourceBranch),
      source_sha: cdktf.stringToTerraform(this._sourceSha),
    };
  }
}
