/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/user_invitation_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserInvitationAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow the ID to be unset. This will result in the resource being skipped when the ID is not set instead of returning an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/user_invitation_accepter#allow_empty_id UserInvitationAccepter#allow_empty_id}
  */
  readonly allowEmptyId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/user_invitation_accepter#invitation_id UserInvitationAccepter#invitation_id}
  */
  readonly invitationId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/user_invitation_accepter github_user_invitation_accepter}
*/
export class UserInvitationAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_user_invitation_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/user_invitation_accepter github_user_invitation_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserInvitationAccepterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserInvitationAccepterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_user_invitation_accepter',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.34.0',
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
    this._allowEmptyId = config.allowEmptyId;
    this._id = config.id;
    this._invitationId = config.invitationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_empty_id - computed: false, optional: true, required: false
  private _allowEmptyId?: boolean | cdktf.IResolvable; 
  public get allowEmptyId() {
    return this.getBooleanAttribute('allow_empty_id');
  }
  public set allowEmptyId(value: boolean | cdktf.IResolvable) {
    this._allowEmptyId = value;
  }
  public resetAllowEmptyId() {
    this._allowEmptyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyIdInput() {
    return this._allowEmptyId;
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

  // invitation_id - computed: false, optional: true, required: false
  private _invitationId?: string; 
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }
  public set invitationId(value: string) {
    this._invitationId = value;
  }
  public resetInvitationId() {
    this._invitationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationIdInput() {
    return this._invitationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_empty_id: cdktf.booleanToTerraform(this._allowEmptyId),
      id: cdktf.stringToTerraform(this._id),
      invitation_id: cdktf.stringToTerraform(this._invitationId),
    };
  }
}
