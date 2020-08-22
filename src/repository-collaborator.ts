// https://www.terraform.io/docs/providers/github/r/repository_collaborator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RepositoryCollaboratorConfig extends TerraformMetaArguments {
  readonly permission?: string;
  readonly repository: string;
  readonly username: string;
}

// Resource

export class RepositoryCollaborator extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RepositoryCollaboratorConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_collaborator',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._permission = config.permission;
    this._repository = config.repository;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invitation_id - computed: true, optional: false, required: true
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string;
  public get permission() {
    return this._permission;
  }
  public set permission(value: string | undefined) {
    this._permission = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      permission: this._permission,
      repository: this._repository,
      username: this._username,
    };
  }
}
