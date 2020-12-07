// https://www.terraform.io/docs/providers/github/r/user_gpg_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGpgKeyConfig extends cdktf.TerraformMetaArguments {
  readonly armoredPublicKey: string;
}

// Resource

export class UserGpgKey extends cdktf.TerraformResource {

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
    return this.getStringAttribute('armored_public_key');
  }
  public set armoredPublicKey(value: string) {
    this._armoredPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get armoredPublicKeyInput() {
    return this._armoredPublicKey
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      armored_public_key: cdktf.stringToTerraform(this._armoredPublicKey),
    };
  }
}
