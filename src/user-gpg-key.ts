// https://www.terraform.io/docs/providers/github/r/user_gpg_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/user_gpg_key.html#armored_public_key UserGpgKey#armored_public_key}
  */
  readonly armoredPublicKey: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/user_gpg_key.html github_user_gpg_key}
*/
export class UserGpgKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_user_gpg_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/user_gpg_key.html github_user_gpg_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGpgKeyConfig
  */
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
  private _armoredPublicKey?: string; 
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
