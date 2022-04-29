// https://www.terraform.io/docs/providers/github/r/branch_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#allows_deletions BranchProtection#allows_deletions}
  */
  readonly allowsDeletions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}
  */
  readonly allowsForcePushes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#enforce_admins BranchProtection#enforce_admins}
  */
  readonly enforceAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#pattern BranchProtection#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#push_restrictions BranchProtection#push_restrictions}
  */
  readonly pushRestrictions?: string[];
  /**
  * Node ID or name of repository
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#repository_id BranchProtection#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}
  */
  readonly requireConversationResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_signed_commits BranchProtection#require_signed_commits}
  */
  readonly requireSignedCommits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_linear_history BranchProtection#required_linear_history}
  */
  readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
  /**
  * required_pull_request_reviews block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}
  */
  readonly requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable;
  /**
  * required_status_checks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_status_checks BranchProtection#required_status_checks}
  */
  readonly requiredStatusChecks?: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable;
}
export interface BranchProtectionRequiredPullRequestReviews {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}
  */
  readonly dismissStaleReviews?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}
  */
  readonly dismissalRestrictions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}
  */
  readonly pullRequestBypassers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}
  */
  readonly requireCodeOwnerReviews?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}
  */
  readonly requiredApprovingReviewCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}
  */
  readonly restrictDismissals?: boolean | cdktf.IResolvable;
}

export function branchProtectionRequiredPullRequestReviewsToTerraform(struct?: BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dismiss_stale_reviews: cdktf.booleanToTerraform(struct!.dismissStaleReviews),
    dismissal_restrictions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dismissalRestrictions),
    pull_request_bypassers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pullRequestBypassers),
    require_code_owner_reviews: cdktf.booleanToTerraform(struct!.requireCodeOwnerReviews),
    required_approving_review_count: cdktf.numberToTerraform(struct!.requiredApprovingReviewCount),
    restrict_dismissals: cdktf.booleanToTerraform(struct!.restrictDismissals),
  }
}

export interface BranchProtectionRequiredStatusChecks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#contexts BranchProtection#contexts}
  */
  readonly contexts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#strict BranchProtection#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
}

export function branchProtectionRequiredStatusChecksToTerraform(struct?: BranchProtectionRequiredStatusChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contexts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contexts),
    strict: cdktf.booleanToTerraform(struct!.strict),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection github_branch_protection}
*/
export class BranchProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_branch_protection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/branch_protection github_branch_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: BranchProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch_protection',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '4.24.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowsDeletions = config.allowsDeletions;
    this._allowsForcePushes = config.allowsForcePushes;
    this._enforceAdmins = config.enforceAdmins;
    this._pattern = config.pattern;
    this._pushRestrictions = config.pushRestrictions;
    this._repositoryId = config.repositoryId;
    this._requireConversationResolution = config.requireConversationResolution;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredLinearHistory = config.requiredLinearHistory;
    this._requiredPullRequestReviews = config.requiredPullRequestReviews;
    this._requiredStatusChecks = config.requiredStatusChecks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allows_deletions - computed: false, optional: true, required: false
  private _allowsDeletions?: boolean | cdktf.IResolvable; 
  public get allowsDeletions() {
    return this.getBooleanAttribute('allows_deletions');
  }
  public set allowsDeletions(value: boolean | cdktf.IResolvable) {
    this._allowsDeletions = value;
  }
  public resetAllowsDeletions() {
    this._allowsDeletions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsDeletionsInput() {
    return this._allowsDeletions;
  }

  // allows_force_pushes - computed: false, optional: true, required: false
  private _allowsForcePushes?: boolean | cdktf.IResolvable; 
  public get allowsForcePushes() {
    return this.getBooleanAttribute('allows_force_pushes');
  }
  public set allowsForcePushes(value: boolean | cdktf.IResolvable) {
    this._allowsForcePushes = value;
  }
  public resetAllowsForcePushes() {
    this._allowsForcePushes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowsForcePushesInput() {
    return this._allowsForcePushes;
  }

  // enforce_admins - computed: false, optional: true, required: false
  private _enforceAdmins?: boolean | cdktf.IResolvable; 
  public get enforceAdmins() {
    return this.getBooleanAttribute('enforce_admins');
  }
  public set enforceAdmins(value: boolean | cdktf.IResolvable) {
    this._enforceAdmins = value;
  }
  public resetEnforceAdmins() {
    this._enforceAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAdminsInput() {
    return this._enforceAdmins;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // push_restrictions - computed: false, optional: true, required: false
  private _pushRestrictions?: string[]; 
  public get pushRestrictions() {
    return cdktf.Fn.tolist(this.getListAttribute('push_restrictions'));
  }
  public set pushRestrictions(value: string[]) {
    this._pushRestrictions = value;
  }
  public resetPushRestrictions() {
    this._pushRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushRestrictionsInput() {
    return this._pushRestrictions;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // require_conversation_resolution - computed: false, optional: true, required: false
  private _requireConversationResolution?: boolean | cdktf.IResolvable; 
  public get requireConversationResolution() {
    return this.getBooleanAttribute('require_conversation_resolution');
  }
  public set requireConversationResolution(value: boolean | cdktf.IResolvable) {
    this._requireConversationResolution = value;
  }
  public resetRequireConversationResolution() {
    this._requireConversationResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireConversationResolutionInput() {
    return this._requireConversationResolution;
  }

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean | cdktf.IResolvable; 
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits');
  }
  public set requireSignedCommits(value: boolean | cdktf.IResolvable) {
    this._requireSignedCommits = value;
  }
  public resetRequireSignedCommits() {
    this._requireSignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedCommitsInput() {
    return this._requireSignedCommits;
  }

  // required_linear_history - computed: false, optional: true, required: false
  private _requiredLinearHistory?: boolean | cdktf.IResolvable; 
  public get requiredLinearHistory() {
    return this.getBooleanAttribute('required_linear_history');
  }
  public set requiredLinearHistory(value: boolean | cdktf.IResolvable) {
    this._requiredLinearHistory = value;
  }
  public resetRequiredLinearHistory() {
    this._requiredLinearHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredLinearHistoryInput() {
    return this._requiredLinearHistory;
  }

  // required_pull_request_reviews - computed: false, optional: true, required: false
  private _requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable; 
  public get requiredPullRequestReviews() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_pull_request_reviews');
  }
  public set requiredPullRequestReviews(value: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable) {
    this._requiredPullRequestReviews = value;
  }
  public resetRequiredPullRequestReviews() {
    this._requiredPullRequestReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPullRequestReviewsInput() {
    return this._requiredPullRequestReviews;
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks?: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable; 
  public get requiredStatusChecks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_status_checks');
  }
  public set requiredStatusChecks(value: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable) {
    this._requiredStatusChecks = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allows_deletions: cdktf.booleanToTerraform(this._allowsDeletions),
      allows_force_pushes: cdktf.booleanToTerraform(this._allowsForcePushes),
      enforce_admins: cdktf.booleanToTerraform(this._enforceAdmins),
      pattern: cdktf.stringToTerraform(this._pattern),
      push_restrictions: cdktf.listMapper(cdktf.stringToTerraform)(this._pushRestrictions),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      require_conversation_resolution: cdktf.booleanToTerraform(this._requireConversationResolution),
      require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
      required_linear_history: cdktf.booleanToTerraform(this._requiredLinearHistory),
      required_pull_request_reviews: cdktf.listMapper(branchProtectionRequiredPullRequestReviewsToTerraform)(this._requiredPullRequestReviews),
      required_status_checks: cdktf.listMapper(branchProtectionRequiredStatusChecksToTerraform)(this._requiredStatusChecks),
    };
  }
}
