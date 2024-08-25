/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/user_gpg_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your public GPG key, generated in ASCII-armored format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/user_gpg_key#armored_public_key UserGpgKey#armored_public_key}
  */
  readonly armoredPublicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/user_gpg_key#id UserGpgKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/user_gpg_key github_user_gpg_key}
*/
export class UserGpgKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_user_gpg_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGpgKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGpgKey to import
  * @param importFromId The id of the existing UserGpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/user_gpg_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGpgKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user_gpg_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.3/docs/resources/user_gpg_key github_user_gpg_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGpgKeyConfig
  */
  public constructor(scope: Construct, id: string, config: UserGpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'github_user_gpg_key',
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
    this._armoredPublicKey = config.armoredPublicKey;
    this._id = config.id;
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
    return this._armoredPublicKey;
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
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      armored_public_key: {
        value: cdktf.stringToHclTerraform(this._armoredPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
