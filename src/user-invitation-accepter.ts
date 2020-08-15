// https://www.terraform.io/docs/providers/github/r/user_invitation_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface UserInvitationAccepterConfig extends TerraformMetaArguments {
  readonly invitationId: string;
}

// Resource

export class UserInvitationAccepter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invitation_id - computed: false, optional: false, required: true
  private _invitationId: string;
  public get invitationId() {
    return this._invitationId;
  }
  public set invitationId(value: string) {
    this._invitationId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      invitation_id: this._invitationId,
    };
  }
}
