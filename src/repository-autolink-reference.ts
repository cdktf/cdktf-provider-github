// https://www.terraform.io/docs/providers/github/r/repository_autolink_reference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryAutolinkReferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_autolink_reference#id RepositoryAutolinkReference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}
  */
  readonly keyPrefix: string;
  /**
  * The repository name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_autolink_reference#repository RepositoryAutolinkReference#repository}
  */
  readonly repository: string;
  /**
  * The template of the target URL used for the links; must be a valid URL and contain `<num>` for the reference number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}
  */
  readonly targetUrlTemplate: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_autolink_reference github_repository_autolink_reference}
*/
export class RepositoryAutolinkReference extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_autolink_reference";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_autolink_reference github_repository_autolink_reference} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryAutolinkReferenceConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryAutolinkReferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_autolink_reference',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '4.26.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._keyPrefix = config.keyPrefix;
    this._repository = config.repository;
    this._targetUrlTemplate = config.targetUrlTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_prefix - computed: false, optional: false, required: true
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
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

  // target_url_template - computed: false, optional: false, required: true
  private _targetUrlTemplate?: string; 
  public get targetUrlTemplate() {
    return this.getStringAttribute('target_url_template');
  }
  public set targetUrlTemplate(value: string) {
    this._targetUrlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlTemplateInput() {
    return this._targetUrlTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_prefix: cdktf.stringToTerraform(this._keyPrefix),
      repository: cdktf.stringToTerraform(this._repository),
      target_url_template: cdktf.stringToTerraform(this._targetUrlTemplate),
    };
  }
}
