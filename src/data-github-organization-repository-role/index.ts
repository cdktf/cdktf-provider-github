/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.8.3/docs/data-sources/organization_repository_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubOrganizationRepositoryRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/data-sources/organization_repository_role#id DataGithubOrganizationRepositoryRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the organization repository role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/data-sources/organization_repository_role#role_id DataGithubOrganizationRepositoryRole#role_id}
  */
  readonly roleId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/data-sources/organization_repository_role github_organization_repository_role}
*/
export class DataGithubOrganizationRepositoryRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_repository_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGithubOrganizationRepositoryRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubOrganizationRepositoryRole to import
  * @param importFromId The id of the existing DataGithubOrganizationRepositoryRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/data-sources/organization_repository_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubOrganizationRepositoryRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_repository_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/data-sources/organization_repository_role github_organization_repository_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubOrganizationRepositoryRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubOrganizationRepositoryRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_repository_role',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.8.3',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_role - computed: true, optional: false, required: false
  public get baseRole() {
    return this.getStringAttribute('base_role');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      role_id: cdktf.numberToTerraform(this._roleId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
