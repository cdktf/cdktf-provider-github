/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryAutolinkReferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}
  */
  readonly isAlphanumeric?: boolean | cdktf.IResolvable;
  /**
  * This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}
  */
  readonly keyPrefix: string;
  /**
  * The repository name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}
  */
  readonly repository: string;
  /**
  * The template of the target URL used for the links; must be a valid URL and contain `<num>` for the reference number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}
  */
  readonly targetUrlTemplate: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference github_repository_autolink_reference}
*/
export class RepositoryAutolinkReference extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_autolink_reference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryAutolinkReference to import
  * @param importFromId The id of the existing RepositoryAutolinkReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryAutolinkReference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_autolink_reference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_autolink_reference github_repository_autolink_reference} Resource
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
        providerVersion: '6.6.0',
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
    this._id = config.id;
    this._isAlphanumeric = config.isAlphanumeric;
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

  // is_alphanumeric - computed: false, optional: true, required: false
  private _isAlphanumeric?: boolean | cdktf.IResolvable; 
  public get isAlphanumeric() {
    return this.getBooleanAttribute('is_alphanumeric');
  }
  public set isAlphanumeric(value: boolean | cdktf.IResolvable) {
    this._isAlphanumeric = value;
  }
  public resetIsAlphanumeric() {
    this._isAlphanumeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAlphanumericInput() {
    return this._isAlphanumeric;
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
      is_alphanumeric: cdktf.booleanToTerraform(this._isAlphanumeric),
      key_prefix: cdktf.stringToTerraform(this._keyPrefix),
      repository: cdktf.stringToTerraform(this._repository),
      target_url_template: cdktf.stringToTerraform(this._targetUrlTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_alphanumeric: {
        value: cdktf.booleanToHclTerraform(this._isAlphanumeric),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_prefix: {
        value: cdktf.stringToHclTerraform(this._keyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_url_template: {
        value: cdktf.stringToHclTerraform(this._targetUrlTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
