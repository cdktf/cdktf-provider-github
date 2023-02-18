// https://www.terraform.io/docs/providers/github/r/actions_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Encrypted value of the secret using the GitHub public key in Base64 format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#encrypted_value ActionsSecret#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#id ActionsSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Plaintext value of the secret to be encrypted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#plaintext_value ActionsSecret#plaintext_value}
  */
  readonly plaintextValue?: string;
  /**
  * Name of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#repository ActionsSecret#repository}
  */
  readonly repository: string;
  /**
  * Name of the secret.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret#secret_name ActionsSecret#secret_name}
  */
  readonly secretName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_secret github_actions_secret}
*/
export class ActionsSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/actions_secret github_actions_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_secret',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.18.0',
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
    this._encryptedValue = config.encryptedValue;
    this._id = config.id;
    this._plaintextValue = config.plaintextValue;
    this._repository = config.repository;
    this._secretName = config.secretName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // encrypted_value - computed: false, optional: true, required: false
  private _encryptedValue?: string; 
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }
  public set encryptedValue(value: string) {
    this._encryptedValue = value;
  }
  public resetEncryptedValue() {
    this._encryptedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueInput() {
    return this._encryptedValue;
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

  // plaintext_value - computed: false, optional: true, required: false
  private _plaintextValue?: string; 
  public get plaintextValue() {
    return this.getStringAttribute('plaintext_value');
  }
  public set plaintextValue(value: string) {
    this._plaintextValue = value;
  }
  public resetPlaintextValue() {
    this._plaintextValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextValueInput() {
    return this._plaintextValue;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encrypted_value: cdktf.stringToTerraform(this._encryptedValue),
      id: cdktf.stringToTerraform(this._id),
      plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
      repository: cdktf.stringToTerraform(this._repository),
      secret_name: cdktf.stringToTerraform(this._secretName),
    };
  }
}
