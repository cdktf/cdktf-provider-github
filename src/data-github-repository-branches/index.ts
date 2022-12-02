// https://www.terraform.io/docs/providers/github/d/repository_branches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryBranchesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_branches#id DataGithubRepositoryBranches#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}
  */
  readonly onlyNonProtectedBranches?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}
  */
  readonly onlyProtectedBranches?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_branches#repository DataGithubRepositoryBranches#repository}
  */
  readonly repository: string;
}
export interface DataGithubRepositoryBranchesBranches {
}

export function dataGithubRepositoryBranchesBranchesToTerraform(struct?: DataGithubRepositoryBranchesBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGithubRepositoryBranchesBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGithubRepositoryBranchesBranches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGithubRepositoryBranchesBranches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
}

export class DataGithubRepositoryBranchesBranchesList extends cdktf.ComplexList {

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
  public get(index: number): DataGithubRepositoryBranchesBranchesOutputReference {
    return new DataGithubRepositoryBranchesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repository_branches github_repository_branches}
*/
export class DataGithubRepositoryBranches extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_branches";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/repository_branches github_repository_branches} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryBranchesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryBranchesConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_branches',
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
    this._onlyNonProtectedBranches = config.onlyNonProtectedBranches;
    this._onlyProtectedBranches = config.onlyProtectedBranches;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branches - computed: true, optional: false, required: false
  private _branches = new DataGithubRepositoryBranchesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
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

  // only_non_protected_branches - computed: false, optional: true, required: false
  private _onlyNonProtectedBranches?: boolean | cdktf.IResolvable; 
  public get onlyNonProtectedBranches() {
    return this.getBooleanAttribute('only_non_protected_branches');
  }
  public set onlyNonProtectedBranches(value: boolean | cdktf.IResolvable) {
    this._onlyNonProtectedBranches = value;
  }
  public resetOnlyNonProtectedBranches() {
    this._onlyNonProtectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyNonProtectedBranchesInput() {
    return this._onlyNonProtectedBranches;
  }

  // only_protected_branches - computed: false, optional: true, required: false
  private _onlyProtectedBranches?: boolean | cdktf.IResolvable; 
  public get onlyProtectedBranches() {
    return this.getBooleanAttribute('only_protected_branches');
  }
  public set onlyProtectedBranches(value: boolean | cdktf.IResolvable) {
    this._onlyProtectedBranches = value;
  }
  public resetOnlyProtectedBranches() {
    this._onlyProtectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyProtectedBranchesInput() {
    return this._onlyProtectedBranches;
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
      only_non_protected_branches: cdktf.booleanToTerraform(this._onlyNonProtectedBranches),
      only_protected_branches: cdktf.booleanToTerraform(this._onlyProtectedBranches),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
