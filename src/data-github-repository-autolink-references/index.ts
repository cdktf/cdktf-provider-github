/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_autolink_references
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryAutolinkReferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}
  */
  readonly repository: string;
}
export interface DataGithubRepositoryAutolinkReferencesAutolinkReferences {
}

export function dataGithubRepositoryAutolinkReferencesAutolinkReferencesToTerraform(struct?: DataGithubRepositoryAutolinkReferencesAutolinkReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGithubRepositoryAutolinkReferencesAutolinkReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubRepositoryAutolinkReferencesAutolinkReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_alphanumeric - computed: true, optional: false, required: false
  public get isAlphanumeric() {
    return this.getBooleanAttribute('is_alphanumeric');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // target_url_template - computed: true, optional: false, required: false
  public get targetUrlTemplate() {
    return this.getStringAttribute('target_url_template');
  }
}

export class DataGithubRepositoryAutolinkReferencesAutolinkReferencesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference {
    return new DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_autolink_references github_repository_autolink_references}
*/
export class DataGithubRepositoryAutolinkReferences extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_autolink_references";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGithubRepositoryAutolinkReferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubRepositoryAutolinkReferences to import
  * @param importFromId The id of the existing DataGithubRepositoryAutolinkReferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_autolink_references#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubRepositoryAutolinkReferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_autolink_references", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_autolink_references github_repository_autolink_references} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryAutolinkReferencesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryAutolinkReferencesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_autolink_references',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.43.0',
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

  // autolink_references - computed: true, optional: false, required: false
  private _autolinkReferences = new DataGithubRepositoryAutolinkReferencesAutolinkReferencesList(this, "autolink_references", false);
  public get autolinkReferences() {
    return this._autolinkReferences;
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
