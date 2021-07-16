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
  readonly deploymentBranchPolicy?: RepositoryEnvironmentDeploymentBranchPolicy[];
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
  readonly customBranchPolicies: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html#protected_branches RepositoryEnvironment#protected_branches}
  */
  readonly protectedBranches: boolean;
}

function repositoryEnvironmentDeploymentBranchPolicyToTerraform(struct?: RepositoryEnvironmentDeploymentBranchPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_branch_policies: cdktf.booleanToTerraform(struct!.customBranchPolicies),
    protected_branches: cdktf.booleanToTerraform(struct!.protectedBranches),
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
  return {
    teams: cdktf.listMapper(cdktf.numberToTerraform)(struct!.teams),
    users: cdktf.listMapper(cdktf.numberToTerraform)(struct!.users),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_environment.html github_repository_environment}
*/
export class RepositoryEnvironment extends cdktf.TerraformResource {

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
  private _environment: string;
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

  // wait_timer - computed: false, optional: true, required: false
  private _waitTimer?: number;
  public get waitTimer() {
    return this.getNumberAttribute('wait_timer');
  }
  public set waitTimer(value: number ) {
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
  private _deploymentBranchPolicy?: RepositoryEnvironmentDeploymentBranchPolicy[];
  public get deploymentBranchPolicy() {
    return this.interpolationForAttribute('deployment_branch_policy') as any;
  }
  public set deploymentBranchPolicy(value: RepositoryEnvironmentDeploymentBranchPolicy[] ) {
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
  private _reviewers?: RepositoryEnvironmentReviewers[];
  public get reviewers() {
    return this.interpolationForAttribute('reviewers') as any;
  }
  public set reviewers(value: RepositoryEnvironmentReviewers[] ) {
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
      deployment_branch_policy: cdktf.listMapper(repositoryEnvironmentDeploymentBranchPolicyToTerraform)(this._deploymentBranchPolicy),
      reviewers: cdktf.listMapper(repositoryEnvironmentReviewersToTerraform)(this._reviewers),
    };
  }
}
