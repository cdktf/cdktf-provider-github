// https://www.terraform.io/docs/providers/github/r/enterprise_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}
  */
  readonly adminLogins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#billing_email EnterpriseOrganization#billing_email}
  */
  readonly billingEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#description EnterpriseOrganization#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}
  */
  readonly enterpriseId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#id EnterpriseOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#name EnterpriseOrganization#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization github_enterprise_organization}
*/
export class EnterpriseOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_enterprise_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization github_enterprise_organization} Resource
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
        providerVersion: '5.17.0',
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
      enterprise_id: cdktf.stringToTerraform(this._enterpriseId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
