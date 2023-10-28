// https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of organization owner usernames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}
  */
  readonly adminLogins: string[];
  /**
  * The billing email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}
  */
  readonly billingEmail: string;
  /**
  * The description of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#description EnterpriseOrganization#description}
  */
  readonly description?: string;
  /**
  * The display name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#display_name EnterpriseOrganization#display_name}
  */
  readonly displayName?: string;
  /**
  * The ID of the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}
  */
  readonly enterpriseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#name EnterpriseOrganization#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization github_enterprise_organization}
*/
export class EnterpriseOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_enterprise_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseOrganization to import
  * @param importFromId The id of the existing EnterpriseOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/enterprise_organization github_enterprise_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'github_enterprise_organization',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.41.0',
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
    this._adminLogins = config.adminLogins;
    this._billingEmail = config.billingEmail;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enterpriseId = config.enterpriseId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_logins - computed: false, optional: false, required: true
  private _adminLogins?: string[]; 
  public get adminLogins() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_logins'));
  }
  public set adminLogins(value: string[]) {
    this._adminLogins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLoginsInput() {
    return this._adminLogins;
  }

  // billing_email - computed: false, optional: false, required: true
  private _billingEmail?: string; 
  public get billingEmail() {
    return this.getStringAttribute('billing_email');
  }
  public set billingEmail(value: string) {
    this._billingEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingEmailInput() {
    return this._billingEmail;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enterprise_id - computed: false, optional: false, required: true
  private _enterpriseId?: string; 
  public get enterpriseId() {
    return this.getStringAttribute('enterprise_id');
  }
  public set enterpriseId(value: string) {
    this._enterpriseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseIdInput() {
    return this._enterpriseId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_logins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminLogins),
      billing_email: cdktf.stringToTerraform(this._billingEmail),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enterprise_id: cdktf.stringToTerraform(this._enterpriseId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
