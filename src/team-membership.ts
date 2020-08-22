// https://www.terraform.io/docs/providers/github/r/team_membership.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TeamMembershipConfig extends TerraformMetaArguments {
  readonly role?: string;
  readonly teamId: string;
  readonly username: string;
}

// Resource

export class TeamMembership extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TeamMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team_membership',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._role = config.role;
    this._teamId = config.teamId;
    this._username = config.username;
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

  // role - computed: false, optional: true, required: false
  private _role?: string;
  public get role() {
    return this._role;
  }
  public set role(value: string | undefined) {
    this._role = value;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId: string;
  public get teamId() {
    return this._teamId;
  }
  public set teamId(value: string) {
    this._teamId = value;
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
      role: this._role,
      team_id: this._teamId,
      username: this._username,
    };
  }
}
