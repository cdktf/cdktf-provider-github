// https://www.terraform.io/docs/providers/github/r/user_invitation_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserInvitationAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/user_invitation_accepter.html#invitation_id UserInvitationAccepter#invitation_id}
  */
  readonly invitationId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/user_invitation_accepter.html github_user_invitation_accepter}
*/
export class UserInvitationAccepter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/user_invitation_accepter.html github_user_invitation_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserInvitationAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: UserInvitationAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'github_user_invitation_accepter',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._invitationId = config.invitationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitation_id - computed: false, optional: false, required: true
  private _invitationId: string;
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }
  public set invitationId(value: string) {
    this._invitationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationIdInput() {
    return this._invitationId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      invitation_id: cdktf.stringToTerraform(this._invitationId),
    };
  }
}
