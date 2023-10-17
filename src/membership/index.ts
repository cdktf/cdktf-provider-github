// https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instead of removing the member from the org, you can choose to downgrade their membership to 'member' when this resource is destroyed. This is useful when wanting to downgrade admins while keeping them in the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/membership#downgrade_on_destroy Membership#downgrade_on_destroy}
  */
  readonly downgradeOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/membership#id Membership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The role of the user within the organization. Must be one of 'member' or 'admin'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/membership#role Membership#role}
  */
  readonly role?: string;
  /**
  * The user to add to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/membership#username Membership#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/membership github_membership}
*/
export class Membership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/membership github_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MembershipConfig
  */
  public constructor(scope: Construct, id: string, config: MembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'github_membership',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.40.0',
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
    this._downgradeOnDestroy = config.downgradeOnDestroy;
    this._id = config.id;
    this._role = config.role;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // downgrade_on_destroy - computed: false, optional: true, required: false
  private _downgradeOnDestroy?: boolean | cdktf.IResolvable; 
  public get downgradeOnDestroy() {
    return this.getBooleanAttribute('downgrade_on_destroy');
  }
  public set downgradeOnDestroy(value: boolean | cdktf.IResolvable) {
    this._downgradeOnDestroy = value;
  }
  public resetDowngradeOnDestroy() {
    this._downgradeOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downgradeOnDestroyInput() {
    return this._downgradeOnDestroy;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      downgrade_on_destroy: cdktf.booleanToTerraform(this._downgradeOnDestroy),
      id: cdktf.stringToTerraform(this._id),
      role: cdktf.stringToTerraform(this._role),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
