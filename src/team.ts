// https://www.terraform.io/docs/providers/github/r/team.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TeamConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly ldapDn?: string;
  readonly name: string;
  readonly parentTeamId?: number;
  readonly privacy?: string;
}

// Resource

export class Team extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._ldapDn = config.ldapDn;
    this._name = config.name;
    this._parentTeamId = config.parentTeamId;
    this._privacy = config.privacy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // ldap_dn - computed: false, optional: true, required: false
  private _ldapDn?: string;
  public get ldapDn() {
    return this._ldapDn;
  }
  public set ldapDn(value: string | undefined) {
    this._ldapDn = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // node_id - computed: true, optional: false, required: true
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // parent_team_id - computed: false, optional: true, required: false
  private _parentTeamId?: number;
  public get parentTeamId() {
    return this._parentTeamId;
  }
  public set parentTeamId(value: number | undefined) {
    this._parentTeamId = value;
  }

  // privacy - computed: false, optional: true, required: false
  private _privacy?: string;
  public get privacy() {
    return this._privacy;
  }
  public set privacy(value: string | undefined) {
    this._privacy = value;
  }

  // slug - computed: true, optional: false, required: true
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      ldap_dn: this._ldapDn,
      name: this._name,
      parent_team_id: this._parentTeamId,
      privacy: this._privacy,
    };
  }
}
