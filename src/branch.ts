// https://www.terraform.io/docs/providers/github/r/branch.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BranchConfig extends TerraformMetaArguments {
  readonly branch: string;
  readonly repository: string;
  readonly sourceBranch?: string;
  readonly sourceSha?: string;
}

// Resource

export class Branch extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._branch;
  }
  public set branch(value: string) {
    this._branch = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ref - computed: true, optional: false, required: true
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // sha - computed: true, optional: false, required: true
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // source_branch - computed: false, optional: true, required: false
  private _sourceBranch?: string;
  public get sourceBranch() {
    return this._sourceBranch;
  }
  public set sourceBranch(value: string | undefined) {
    this._sourceBranch = value;
  }

  // source_sha - computed: true, optional: true, required: false
  private _sourceSha?: string;
  public get sourceSha() {
    return this._sourceSha ?? this.getStringAttribute('source_sha');
  }
  public set sourceSha(value: string | undefined) {
    this._sourceSha = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: this._branch,
      repository: this._repository,
      source_branch: this._sourceBranch,
      source_sha: this._sourceSha,
    };
  }
}
