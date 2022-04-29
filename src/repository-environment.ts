// https://www.terraform.io/docs/providers/github/r/repository_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#environment RepositoryEnvironment#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#repository RepositoryEnvironment#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#wait_timer RepositoryEnvironment#wait_timer}
  */
  readonly waitTimer?: number;
  /**
  * deployment_branch_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}
  */
  readonly deploymentBranchPolicy?: RepositoryEnvironmentDeploymentBranchPolicy;
  /**
  * reviewers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#reviewers RepositoryEnvironment#reviewers}
  */
  readonly reviewers?: RepositoryEnvironmentReviewers[] | cdktf.IResolvable;
}
export interface RepositoryEnvironmentDeploymentBranchPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}
  */
  readonly customBranchPolicies: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#protected_branches RepositoryEnvironment#protected_branches}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#teams RepositoryEnvironment#teams}
  */
  readonly teams?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment#users RepositoryEnvironment#users}
  */
  readonly users?: number[];
}

export function repositoryEnvironmentReviewersToTerraform(struct?: RepositoryEnvironmentReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    teams: cdktf.listMapper(cdktf.numberToTerraform)(struct!.teams),
    users: cdktf.listMapper(cdktf.numberToTerraform)(struct!.users),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_environment github_repository_environment}
*/
export class RepositoryEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_environment github_repository_environment} Resource
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
        providerVersion: '4.24.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._environment = config.environment;
    this._repository = config.repository;
    this._waitTimer = config.waitTimer;
    this._deploymentBranchPolicy.internalValue = config.deploymentBranchPolicy;
    this._reviewers = config.reviewers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
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
  private _reviewers?: RepositoryEnvironmentReviewers[] | cdktf.IResolvable; 
  public get reviewers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('reviewers');
  }
  public set reviewers(value: RepositoryEnvironmentReviewers[] | cdktf.IResolvable) {
    this._reviewers = value;
  }
  public resetReviewers() {
    this._reviewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewersInput() {
    return this._reviewers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      repository: cdktf.stringToTerraform(this._repository),
      wait_timer: cdktf.numberToTerraform(this._waitTimer),
      deployment_branch_policy: repositoryEnvironmentDeploymentBranchPolicyToTerraform(this._deploymentBranchPolicy.internalValue),
      reviewers: cdktf.listMapper(repositoryEnvironmentReviewersToTerraform)(this._reviewers),
    };
  }
}
