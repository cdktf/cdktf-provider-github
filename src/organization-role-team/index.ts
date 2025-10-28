/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/organization_role_team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationRoleTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/organization_role_team#id OrganizationRoleTeam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the organization role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/organization_role_team#role_id OrganizationRoleTeam#role_id}
  */
  readonly roleId: number;
  /**
  * The slug of the team name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/organization_role_team#team_slug OrganizationRoleTeam#team_slug}
  */
  readonly teamSlug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/organization_role_team github_organization_role_team}
*/
export class OrganizationRoleTeam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_role_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationRoleTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationRoleTeam to import
  * @param importFromId The id of the existing OrganizationRoleTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/organization_role_team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationRoleTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_role_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/organization_role_team github_organization_role_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationRoleTeamConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationRoleTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_role_team',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.7.1',
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
    this._id = config.id;
    this._roleId = config.roleId;
    this._teamSlug = config.teamSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // role_id - computed: false, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // team_slug - computed: false, optional: false, required: true
  private _teamSlug?: string; 
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }
  public set teamSlug(value: string) {
    this._teamSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSlugInput() {
    return this._teamSlug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      role_id: cdktf.numberToTerraform(this._roleId),
      team_slug: cdktf.stringToTerraform(this._teamSlug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_slug: {
        value: cdktf.stringToHclTerraform(this._teamSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
