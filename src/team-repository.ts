// https://www.terraform.io/docs/providers/github/r/team_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TeamRepositoryConfig extends TerraformMetaArguments {
  readonly permission?: string;
  readonly repository: string;
  readonly teamId: string;
}

// Resource

export class TeamRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TeamRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team_repository',
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
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // team_id - computed: false, optional: false, required: true
  private _teamId: string;
  public get teamId() {
    return this._teamId;
  }
  public set teamId(value: string) {
    this._teamId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      permission: this._permission,
      repository: this._repository,
      team_id: this._teamId,
    };
  }
}
