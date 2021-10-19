// https://www.terraform.io/docs/providers/github/r/repository_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#environment RepositoryEnvironment#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#repository RepositoryEnvironment#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#wait_timer RepositoryEnvironment#wait_timer}
  */
  readonly waitTimer?: number;
  /**
  * deployment_branch_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}
  */
  readonly deploymentBranchPolicy?: RepositoryEnvironmentDeploymentBranchPolicy;
  /**
  * reviewers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#reviewers RepositoryEnvironment#reviewers}
  */
  readonly reviewers?: RepositoryEnvironmentReviewers[];
}
export interface RepositoryEnvironmentDeploymentBranchPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#custom_branch_policies RepositoryEnvironment#custom_branch_policies}
  */
  readonly customBranchPolicies: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#protected_branches RepositoryEnvironment#protected_branches}
  */
  readonly protectedBranches: boolean | cdktf.IResolvable;
}

function repositoryEnvironmentDeploymentBranchPolicyToTerraform(struct?: RepositoryEnvironmentDeploymentBranchPolicyOutputReference | RepositoryEnvironmentDeploymentBranchPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_branch_policies: cdktf.booleanToTerraform(struct!.customBranchPolicies),
    protected_branches: cdktf.booleanToTerraform(struct!.protectedBranches),
  }
}

export class RepositoryEnvironmentDeploymentBranchPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // custom_branch_policies - computed: false, optional: false, required: true
  private _customBranchPolicies?: boolean | cdktf.IResolvable; 
  public get customBranchPolicies() {
    return this.getBooleanAttribute('custom_branch_policies') as any;
  }
  public set customBranchPolicies(value: boolean | cdktf.IResolvable) {
    this._customBranchPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customBranchPoliciesInput() {
    return this._customBranchPolicies
  }

  // protected_branches - computed: false, optional: false, required: true
  private _protectedBranches?: boolean | cdktf.IResolvable; 
  public get protectedBranches() {
    return this.getBooleanAttribute('protected_branches') as any;
  }
  public set protectedBranches(value: boolean | cdktf.IResolvable) {
    this._protectedBranches = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchesInput() {
    return this._protectedBranches
  }
}
export interface RepositoryEnvironmentReviewers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#teams RepositoryEnvironment#teams}
  */
  readonly teams?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#users RepositoryEnvironment#users}
  */
  readonly users?: number[];
}

function repositoryEnvironmentReviewersToTerraform(struct?: RepositoryEnvironmentReviewers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    teams: cdktf.listMapper(cdktf.numberToTerraform)(struct!.teams),
    users: cdktf.listMapper(cdktf.numberToTerraform)(struct!.users),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html github_repository_environment}
*/
export class RepositoryEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repository_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html github_repository_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_environment',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._environment = config.environment;
    this._repository = config.repository;
    this._waitTimer = config.waitTimer;
    this._deploymentBranchPolicy = config.deploymentBranchPolicy;
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
    return this._environment
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
    return this._repository
  }

  // wait_timer - computed: false, optional: true, required: false
  private _waitTimer?: number | undefined; 
  public get waitTimer() {
    return this.getNumberAttribute('wait_timer');
  }
  public set waitTimer(value: number | undefined) {
    this._waitTimer = value;
  }
  public resetWaitTimer() {
    this._waitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimerInput() {
    return this._waitTimer
  }

  // deployment_branch_policy - computed: false, optional: true, required: false
  private _deploymentBranchPolicy?: RepositoryEnvironmentDeploymentBranchPolicy | undefined; 
  private __deploymentBranchPolicyOutput = new RepositoryEnvironmentDeploymentBranchPolicyOutputReference(this as any, "deployment_branch_policy", true);
  public get deploymentBranchPolicy() {
    return this.__deploymentBranchPolicyOutput;
  }
  public putDeploymentBranchPolicy(value: RepositoryEnvironmentDeploymentBranchPolicy | undefined) {
    this._deploymentBranchPolicy = value;
  }
  public resetDeploymentBranchPolicy() {
    this._deploymentBranchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentBranchPolicyInput() {
    return this._deploymentBranchPolicy
  }

  // reviewers - computed: false, optional: true, required: false
  private _reviewers?: RepositoryEnvironmentReviewers[] | undefined; 
  public get reviewers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('reviewers') as any;
  }
  public set reviewers(value: RepositoryEnvironmentReviewers[] | undefined) {
    this._reviewers = value;
  }
  public resetReviewers() {
    this._reviewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewersInput() {
    return this._reviewers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      repository: cdktf.stringToTerraform(this._repository),
      wait_timer: cdktf.numberToTerraform(this._waitTimer),
      deployment_branch_policy: repositoryEnvironmentDeploymentBranchPolicyToTerraform(this._deploymentBranchPolicy),
      reviewers: cdktf.listMapper(repositoryEnvironmentReviewersToTerraform)(this._reviewers),
    };
  }
}
