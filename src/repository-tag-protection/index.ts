// https://www.terraform.io/docs/providers/github/r/repository_tag_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryTagProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_tag_protection#id RepositoryTagProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_tag_protection#pattern RepositoryTagProtection#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_tag_protection#repository RepositoryTagProtection#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_tag_protection github_repository_tag_protection}
*/
export class RepositoryTagProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_tag_protection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_tag_protection github_repository_tag_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryTagProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryTagProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_tag_protection',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.11.0',
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
    this._pattern = config.pattern;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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

  // tag_protection_id - computed: true, optional: false, required: false
  public get tagProtectionId() {
    return this.getNumberAttribute('tag_protection_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pattern: cdktf.stringToTerraform(this._pattern),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
