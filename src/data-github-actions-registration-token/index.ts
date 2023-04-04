// https://www.terraform.io/docs/providers/github/d/actions_registration_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubActionsRegistrationTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/actions_registration_token#id DataGithubActionsRegistrationToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/actions_registration_token#repository DataGithubActionsRegistrationToken#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/actions_registration_token github_actions_registration_token}
*/
export class DataGithubActionsRegistrationToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_actions_registration_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/actions_registration_token github_actions_registration_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubActionsRegistrationTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubActionsRegistrationTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_registration_token',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.19.0',
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
    this._id = config.id;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getNumberAttribute('expires_at');
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
