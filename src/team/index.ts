// https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Adds a default maintainer to the team. Adds the creating user to the team when 'true'.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}
  */
  readonly createDefaultMaintainer?: boolean | cdktf.IResolvable;
  /**
  * A description of the team.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team#ldap_dn Team#ldap_dn}
  */
  readonly ldapDn?: string;
  /**
  * The name of the team.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * The ID of the parent team, if this is a nested team.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team#parent_team_id Team#parent_team_id}
  */
  readonly parentTeamId?: number;
  /**
  * The level of privacy for the team. Must be one of 'secret' or 'closed'.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team#privacy Team#privacy}
  */
  readonly privacy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team github_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_team";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/team github_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.23.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createDefaultMaintainer = config.createDefaultMaintainer;
    this._description = config.description;
    this._id = config.id;
    this._ldapDn = config.ldapDn;
    this._name = config.name;
    this._parentTeamId = config.parentTeamId;
    this._privacy = config.privacy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_default_maintainer - computed: false, optional: true, required: false
  private _createDefaultMaintainer?: boolean | cdktf.IResolvable; 
  public get createDefaultMaintainer() {
    return this.getBooleanAttribute('create_default_maintainer');
  }
  public set createDefaultMaintainer(value: boolean | cdktf.IResolvable) {
    this._createDefaultMaintainer = value;
  }
  public resetCreateDefaultMaintainer() {
    this._createDefaultMaintainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultMaintainerInput() {
    return this._createDefaultMaintainer;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ldap_dn - computed: false, optional: true, required: false
  private _ldapDn?: string; 
  public get ldapDn() {
    return this.getStringAttribute('ldap_dn');
  }
  public set ldapDn(value: string) {
    this._ldapDn = value;
  }
  public resetLdapDn() {
    this._ldapDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapDnInput() {
    return this._ldapDn;
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
    return this._name;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // parent_team_id - computed: false, optional: true, required: false
  private _parentTeamId?: number; 
  public get parentTeamId() {
    return this.getNumberAttribute('parent_team_id');
  }
  public set parentTeamId(value: number) {
    this._parentTeamId = value;
  }
  public resetParentTeamId() {
    this._parentTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTeamIdInput() {
    return this._parentTeamId;
  }

  // privacy - computed: false, optional: true, required: false
  private _privacy?: string; 
  public get privacy() {
    return this.getStringAttribute('privacy');
  }
  public set privacy(value: string) {
    this._privacy = value;
  }
  public resetPrivacy() {
    this._privacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy;
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
      id: cdktf.stringToTerraform(this._id),
      ldap_dn: cdktf.stringToTerraform(this._ldapDn),
      name: cdktf.stringToTerraform(this._name),
      parent_team_id: cdktf.numberToTerraform(this._parentTeamId),
      privacy: cdktf.stringToTerraform(this._privacy),
    };
  }
}
