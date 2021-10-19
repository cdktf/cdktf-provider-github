// https://www.terraform.io/docs/providers/github/r/team.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team.html#create_default_maintainer Team#create_default_maintainer}
  */
  readonly createDefaultMaintainer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team.html#description Team#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team.html#ldap_dn Team#ldap_dn}
  */
  readonly ldapDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team.html#name Team#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team.html#parent_team_id Team#parent_team_id}
  */
  readonly parentTeamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team.html#privacy Team#privacy}
  */
  readonly privacy?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/team.html github_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_team";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/team.html github_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
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
    this._createDefaultMaintainer = config.createDefaultMaintainer;
    this._description = config.description;
    this._ldapDn = config.ldapDn;
    this._name = config.name;
    this._parentTeamId = config.parentTeamId;
    this._privacy = config.privacy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_default_maintainer - computed: false, optional: true, required: false
  private _createDefaultMaintainer?: boolean | cdktf.IResolvable | undefined; 
  public get createDefaultMaintainer() {
    return this.getBooleanAttribute('create_default_maintainer') as any;
  }
  public set createDefaultMaintainer(value: boolean | cdktf.IResolvable | undefined) {
    this._createDefaultMaintainer = value;
  }
  public resetCreateDefaultMaintainer() {
    this._createDefaultMaintainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultMaintainerInput() {
    return this._createDefaultMaintainer
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_dn - computed: false, optional: true, required: false
  private _ldapDn?: string | undefined; 
  public get ldapDn() {
    return this.getStringAttribute('ldap_dn');
  }
  public set ldapDn(value: string | undefined) {
    this._ldapDn = value;
  }
  public resetLdapDn() {
    this._ldapDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapDnInput() {
    return this._ldapDn
  }

  // members_count - computed: true, optional: false, required: false
  public get membersCount() {
    return this.getNumberAttribute('members_count');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // parent_team_id - computed: false, optional: true, required: false
  private _parentTeamId?: number | undefined; 
  public get parentTeamId() {
    return this.getNumberAttribute('parent_team_id');
  }
  public set parentTeamId(value: number | undefined) {
    this._parentTeamId = value;
  }
  public resetParentTeamId() {
    this._parentTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTeamIdInput() {
    return this._parentTeamId
  }

  // privacy - computed: false, optional: true, required: false
  private _privacy?: string | undefined; 
  public get privacy() {
    return this.getStringAttribute('privacy');
  }
  public set privacy(value: string | undefined) {
    this._privacy = value;
  }
  public resetPrivacy() {
    this._privacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_default_maintainer: cdktf.booleanToTerraform(this._createDefaultMaintainer),
      description: cdktf.stringToTerraform(this._description),
      ldap_dn: cdktf.stringToTerraform(this._ldapDn),
      name: cdktf.stringToTerraform(this._name),
      parent_team_id: cdktf.numberToTerraform(this._parentTeamId),
      privacy: cdktf.stringToTerraform(this._privacy),
    };
  }
}
