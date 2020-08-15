// https://www.terraform.io/docs/providers/github/r/user_gpg_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface UserGpgKeyConfig extends TerraformMetaArguments {
  readonly armoredPublicKey: string;
}

// Resource

export class UserGpgKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: UserGpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'github_user_gpg_key',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._armoredPublicKey = config.armoredPublicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // armored_public_key - computed: false, optional: false, required: true
  private _armoredPublicKey: string;
  public get armoredPublicKey() {
    return this._armoredPublicKey;
  }
  public set armoredPublicKey(value: string) {
    this._armoredPublicKey = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_id - computed: true, optional: false, required: true
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      armored_public_key: this._armoredPublicKey,
    };
  }
}
