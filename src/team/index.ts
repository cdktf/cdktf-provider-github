/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Adds a default maintainer to the team. Adds the creating user to the team when 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}
  */
  readonly createDefaultMaintainer?: boolean | cdktf.IResolvable;
  /**
  * A description of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#ldap_dn Team#ldap_dn}
  */
  readonly ldapDn?: string;
  /**
  * The name of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * The ID or slug of the parent team, if this is a nested team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#parent_team_id Team#parent_team_id}
  */
  readonly parentTeamId?: string;
  /**
  * The id of the parent team read in Github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#parent_team_read_id Team#parent_team_read_id}
  */
  readonly parentTeamReadId?: string;
  /**
  * The id of the parent team read in Github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#parent_team_read_slug Team#parent_team_read_slug}
  */
  readonly parentTeamReadSlug?: string;
  /**
  * The level of privacy for the team. Must be one of 'secret' or 'closed'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#privacy Team#privacy}
  */
  readonly privacy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team github_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/team github_team} Resource
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
        providerVersion: '6.4.0',
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
    this._createDefaultMaintainer = config.createDefaultMaintainer;
    this._description = config.description;
    this._id = config.id;
    this._ldapDn = config.ldapDn;
    this._name = config.name;
    this._parentTeamId = config.parentTeamId;
    this._parentTeamReadId = config.parentTeamReadId;
    this._parentTeamReadSlug = config.parentTeamReadSlug;
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
  private _parentTeamId?: string; 
  public get parentTeamId() {
    return this.getStringAttribute('parent_team_id');
  }
  public set parentTeamId(value: string) {
    this._parentTeamId = value;
  }
  public resetParentTeamId() {
    this._parentTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTeamIdInput() {
    return this._parentTeamId;
  }

  // parent_team_read_id - computed: true, optional: true, required: false
  private _parentTeamReadId?: string; 
  public get parentTeamReadId() {
    return this.getStringAttribute('parent_team_read_id');
  }
  public set parentTeamReadId(value: string) {
    this._parentTeamReadId = value;
  }
  public resetParentTeamReadId() {
    this._parentTeamReadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTeamReadIdInput() {
    return this._parentTeamReadId;
  }

  // parent_team_read_slug - computed: true, optional: true, required: false
  private _parentTeamReadSlug?: string; 
  public get parentTeamReadSlug() {
    return this.getStringAttribute('parent_team_read_slug');
  }
  public set parentTeamReadSlug(value: string) {
    this._parentTeamReadSlug = value;
  }
  public resetParentTeamReadSlug() {
    this._parentTeamReadSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTeamReadSlugInput() {
    return this._parentTeamReadSlug;
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
      parent_team_id: cdktf.stringToTerraform(this._parentTeamId),
      parent_team_read_id: cdktf.stringToTerraform(this._parentTeamReadId),
      parent_team_read_slug: cdktf.stringToTerraform(this._parentTeamReadSlug),
      privacy: cdktf.stringToTerraform(this._privacy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_default_maintainer: {
        value: cdktf.booleanToHclTerraform(this._createDefaultMaintainer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ldap_dn: {
        value: cdktf.stringToHclTerraform(this._ldapDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_team_id: {
        value: cdktf.stringToHclTerraform(this._parentTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_team_read_id: {
        value: cdktf.stringToHclTerraform(this._parentTeamReadId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_team_read_slug: {
        value: cdktf.stringToHclTerraform(this._parentTeamReadSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy: {
        value: cdktf.stringToHclTerraform(this._privacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
