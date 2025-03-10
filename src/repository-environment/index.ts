/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can Admins bypass deployment protections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#can_admins_bypass RepositoryEnvironment#can_admins_bypass}
  */
  readonly canAdminsBypass?: boolean | cdktf.IResolvable;
  /**
  * The name of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#environment RepositoryEnvironment#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#id RepositoryEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prevent users from approving workflows runs that they triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#prevent_self_review RepositoryEnvironment#prevent_self_review}
  */
  readonly preventSelfReview?: boolean | cdktf.IResolvable;
  /**
  * The repository of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#repository RepositoryEnvironment#repository}
  */
  readonly repository: string;
  /**
  * Amount of time to delay a job after the job is initially triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}
  */
  readonly waitTimer?: number;
  /**
  * deployment_branch_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}
  */
  readonly deploymentBranchPolicy?: RepositoryEnvironmentDeploymentBranchPolicy;
  /**
  * reviewers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}
  */
  readonly reviewers?: RepositoryEnvironmentReviewers[] | cdktf.IResolvable;
}
export interface RepositoryEnvironmentDeploymentBranchPolicy {
  /**
  * Whether only branches that match the specified name patterns can deploy to this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}
  */
  readonly customBranchPolicies: boolean | cdktf.IResolvable;
  /**
  * Whether only branches with branch protection rules can deploy to this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#protected_branches RepositoryEnvironment#protected_branches}
  */
  readonly protectedBranches: boolean | cdktf.IResolvable;
}

export function repositoryEnvironmentDeploymentBranchPolicyToTerraform(struct?: RepositoryEnvironmentDeploymentBranchPolicyOutputReference | RepositoryEnvironmentDeploymentBranchPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_branch_policies: cdktf.booleanToTerraform(struct!.customBranchPolicies),
    protected_branches: cdktf.booleanToTerraform(struct!.protectedBranches),
  }
}


export function repositoryEnvironmentDeploymentBranchPolicyToHclTerraform(struct?: RepositoryEnvironmentDeploymentBranchPolicyOutputReference | RepositoryEnvironmentDeploymentBranchPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_branch_policies: {
      value: cdktf.booleanToHclTerraform(struct!.customBranchPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protected_branches: {
      value: cdktf.booleanToHclTerraform(struct!.protectedBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryEnvironmentDeploymentBranchPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryEnvironmentDeploymentBranchPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customBranchPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBranchPolicies = this._customBranchPolicies;
    }
    if (this._protectedBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedBranches = this._protectedBranches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryEnvironmentDeploymentBranchPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customBranchPolicies = undefined;
      this._protectedBranches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customBranchPolicies = value.customBranchPolicies;
      this._protectedBranches = value.protectedBranches;
    }
  }

  // custom_branch_policies - computed: false, optional: false, required: true
  private _customBranchPolicies?: boolean | cdktf.IResolvable; 
  public get customBranchPolicies() {
    return this.getBooleanAttribute('custom_branch_policies');
  }
  public set customBranchPolicies(value: boolean | cdktf.IResolvable) {
    this._customBranchPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customBranchPoliciesInput() {
    return this._customBranchPolicies;
  }

  // protected_branches - computed: false, optional: false, required: true
  private _protectedBranches?: boolean | cdktf.IResolvable; 
  public get protectedBranches() {
    return this.getBooleanAttribute('protected_branches');
  }
  public set protectedBranches(value: boolean | cdktf.IResolvable) {
    this._protectedBranches = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchesInput() {
    return this._protectedBranches;
  }
}
export interface RepositoryEnvironmentReviewers {
  /**
  * Up to 6 IDs for teams who may review jobs that reference the environment. Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#teams RepositoryEnvironment#teams}
  */
  readonly teams?: number[];
  /**
  * Up to 6 IDs for users who may review jobs that reference the environment. Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#users RepositoryEnvironment#users}
  */
  readonly users?: number[];
}

export function repositoryEnvironmentReviewersToTerraform(struct?: RepositoryEnvironmentReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    teams: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.teams),
    users: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.users),
  }
}


export function repositoryEnvironmentReviewersToHclTerraform(struct?: RepositoryEnvironmentReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    teams: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryEnvironmentReviewersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RepositoryEnvironmentReviewers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryEnvironmentReviewers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._teams = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._teams = value.teams;
      this._users = value.users;
    }
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: number[]; 
  public get teams() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('teams')));
  }
  public set teams(value: number[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // users - computed: false, optional: true, required: false
  private _users?: number[]; 
  public get users() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('users')));
  }
  public set users(value: number[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class RepositoryEnvironmentReviewersList extends cdktf.ComplexList {
  public internalValue? : RepositoryEnvironmentReviewers[] | cdktf.IResolvable

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
  public get(index: number): RepositoryEnvironmentReviewersOutputReference {
    return new RepositoryEnvironmentReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment github_repository_environment}
*/
export class RepositoryEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryEnvironment to import
  * @param importFromId The id of the existing RepositoryEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_environment github_repository_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_environment',
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
    this._canAdminsBypass = config.canAdminsBypass;
    this._environment = config.environment;
    this._id = config.id;
    this._preventSelfReview = config.preventSelfReview;
    this._repository = config.repository;
    this._waitTimer = config.waitTimer;
    this._deploymentBranchPolicy.internalValue = config.deploymentBranchPolicy;
    this._reviewers.internalValue = config.reviewers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_admins_bypass - computed: false, optional: true, required: false
  private _canAdminsBypass?: boolean | cdktf.IResolvable; 
  public get canAdminsBypass() {
    return this.getBooleanAttribute('can_admins_bypass');
  }
  public set canAdminsBypass(value: boolean | cdktf.IResolvable) {
    this._canAdminsBypass = value;
  }
  public resetCanAdminsBypass() {
    this._canAdminsBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canAdminsBypassInput() {
    return this._canAdminsBypass;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // prevent_self_review - computed: false, optional: true, required: false
  private _preventSelfReview?: boolean | cdktf.IResolvable; 
  public get preventSelfReview() {
    return this.getBooleanAttribute('prevent_self_review');
  }
  public set preventSelfReview(value: boolean | cdktf.IResolvable) {
    this._preventSelfReview = value;
  }
  public resetPreventSelfReview() {
    this._preventSelfReview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventSelfReviewInput() {
    return this._preventSelfReview;
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

  // wait_timer - computed: false, optional: true, required: false
  private _waitTimer?: number; 
  public get waitTimer() {
    return this.getNumberAttribute('wait_timer');
  }
  public set waitTimer(value: number) {
    this._waitTimer = value;
  }
  public resetWaitTimer() {
    this._waitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimerInput() {
    return this._waitTimer;
  }

  // deployment_branch_policy - computed: false, optional: true, required: false
  private _deploymentBranchPolicy = new RepositoryEnvironmentDeploymentBranchPolicyOutputReference(this, "deployment_branch_policy");
  public get deploymentBranchPolicy() {
    return this._deploymentBranchPolicy;
  }
  public putDeploymentBranchPolicy(value: RepositoryEnvironmentDeploymentBranchPolicy) {
    this._deploymentBranchPolicy.internalValue = value;
  }
  public resetDeploymentBranchPolicy() {
    this._deploymentBranchPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentBranchPolicyInput() {
    return this._deploymentBranchPolicy.internalValue;
  }

  // reviewers - computed: false, optional: true, required: false
  private _reviewers = new RepositoryEnvironmentReviewersList(this, "reviewers", false);
  public get reviewers() {
    return this._reviewers;
  }
  public putReviewers(value: RepositoryEnvironmentReviewers[] | cdktf.IResolvable) {
    this._reviewers.internalValue = value;
  }
  public resetReviewers() {
    this._reviewers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewersInput() {
    return this._reviewers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_admins_bypass: cdktf.booleanToTerraform(this._canAdminsBypass),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      prevent_self_review: cdktf.booleanToTerraform(this._preventSelfReview),
      repository: cdktf.stringToTerraform(this._repository),
      wait_timer: cdktf.numberToTerraform(this._waitTimer),
      deployment_branch_policy: repositoryEnvironmentDeploymentBranchPolicyToTerraform(this._deploymentBranchPolicy.internalValue),
      reviewers: cdktf.listMapper(repositoryEnvironmentReviewersToTerraform, true)(this._reviewers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_admins_bypass: {
        value: cdktf.booleanToHclTerraform(this._canAdminsBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      prevent_self_review: {
        value: cdktf.booleanToHclTerraform(this._preventSelfReview),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_timer: {
        value: cdktf.numberToHclTerraform(this._waitTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_branch_policy: {
        value: repositoryEnvironmentDeploymentBranchPolicyToHclTerraform(this._deploymentBranchPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryEnvironmentDeploymentBranchPolicyList",
      },
      reviewers: {
        value: cdktf.listMapperHcl(repositoryEnvironmentReviewersToHclTerraform, true)(this._reviewers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryEnvironmentReviewersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
