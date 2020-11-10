// https://www.terraform.io/docs/providers/github/r/actions_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ActionsSecretConfig extends TerraformMetaArguments {
  readonly plaintextValue: string;
  readonly repository: string;
  readonly secretName: string;
}

// Resource

export class ActionsSecret extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ActionsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_secret',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plaintext_value - computed: false, optional: false, required: true
  private _plaintextValue: string;
  public get plaintextValue() {
    return this.getStringAttribute('plaintext_value');
  }
  public set plaintextValue(value: string) {
    this._plaintextValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextValueInput() {
    return this._plaintextValue
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName: string;
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
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
      plaintext_value: this._plaintextValue,
      repository: this._repository,
      secret_name: this._secretName,
    };
  }
}
