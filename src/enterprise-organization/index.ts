// https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of organization owner usernames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}
  */
  readonly adminLogins: string[];
  /**
  * The billing email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}
  */
  readonly billingEmail: string;
  /**
  * The description of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization#description EnterpriseOrganization#description}
  */
  readonly description?: string;
  /**
  * The display name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization#display_name EnterpriseOrganization#display_name}
  */
  readonly displayName?: string;
  /**
  * The ID of the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}
  */
  readonly enterpriseId: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization#name EnterpriseOrganization#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization github_enterprise_organization}
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
  * @param importFromId The id of the existing EnterpriseOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/enterprise_organization github_enterprise_organization} Resource
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
        providerVersion: '6.2.3',
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
    this._adminLogins = config.adminLogins;
    this._billingEmail = config.billingEmail;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enterpriseId = config.enterpriseId;
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

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getNumberAttribute('database_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_logins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminLogins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      billing_email: {
        value: cdktf.stringToHclTerraform(this._billingEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
