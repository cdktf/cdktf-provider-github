// https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationCustomRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base role for the custom repository role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role#base_role OrganizationCustomRole#base_role}
  */
  readonly baseRole: string;
  /**
  * The description of the custom repository role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role#description OrganizationCustomRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role#id OrganizationCustomRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization custom repository role to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role#name OrganizationCustomRole#name}
  */
  readonly name: string;
  /**
  * The permissions for the custom repository role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role#permissions OrganizationCustomRole#permissions}
  */
  readonly permissions: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role github_organization_custom_role}
*/
export class OrganizationCustomRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization_custom_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/organization_custom_role github_organization_custom_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationCustomRoleConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationCustomRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization_custom_role',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.38.0',
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
    this._baseRole = config.baseRole;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._permissions = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_role - computed: false, optional: false, required: true
  private _baseRole?: string; 
  public get baseRole() {
    return this.getStringAttribute('base_role');
  }
  public set baseRole(value: string) {
    this._baseRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRoleInput() {
    return this._baseRole;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_role: cdktf.stringToTerraform(this._baseRole),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
    };
  }
}
