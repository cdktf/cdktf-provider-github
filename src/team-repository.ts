// https://www.terraform.io/docs/providers/github/r/team_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamRepositoryConfig extends cdktf.TerraformMetaArguments {
  readonly permission?: string;
  readonly repository: string;
  readonly teamId: string;
}

// Resource

export class TeamRepository extends cdktf.TerraformResource {

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string;
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string ) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission
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

  // team_id - computed: false, optional: false, required: true
  private _teamId: string;
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      permission: cdktf.stringToTerraform(this._permission),
      repository: cdktf.stringToTerraform(this._repository),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
