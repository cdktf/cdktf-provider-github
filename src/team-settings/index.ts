// https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings#id TeamSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GitHub team id or the GitHub team slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings#team_id TeamSettings#team_id}
  */
  readonly teamId: string;
  /**
  * review_request_delegation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings#review_request_delegation TeamSettings#review_request_delegation}
  */
  readonly reviewRequestDelegation?: TeamSettingsReviewRequestDelegation;
}
export interface TeamSettingsReviewRequestDelegation {
  /**
  * The algorithm to use when assigning pull requests to team members. Supported values are 'ROUND_ROBIN' and 'LOAD_BALANCE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings#algorithm TeamSettings#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The number of team members to assign to a pull request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings#member_count TeamSettings#member_count}
  */
  readonly memberCount?: number;
  /**
  * whether to notify the entire team when at least one member is also assigned to the pull request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings#notify TeamSettings#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
}

export function teamSettingsReviewRequestDelegationToTerraform(struct?: TeamSettingsReviewRequestDelegationOutputReference | TeamSettingsReviewRequestDelegation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    member_count: cdktf.numberToTerraform(struct!.memberCount),
    notify: cdktf.booleanToTerraform(struct!.notify),
  }
}


export function teamSettingsReviewRequestDelegationToHclTerraform(struct?: TeamSettingsReviewRequestDelegationOutputReference | TeamSettingsReviewRequestDelegation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_count: {
      value: cdktf.numberToHclTerraform(struct!.memberCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify: {
      value: cdktf.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamSettingsReviewRequestDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamSettingsReviewRequestDelegation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._memberCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberCount = this._memberCount;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamSettingsReviewRequestDelegation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._memberCount = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._memberCount = value.memberCount;
      this._notify = value.notify;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // member_count - computed: false, optional: true, required: false
  private _memberCount?: number; 
  public get memberCount() {
    return this.getNumberAttribute('member_count');
  }
  public set memberCount(value: number) {
    this._memberCount = value;
  }
  public resetMemberCount() {
    this._memberCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberCountInput() {
    return this._memberCount;
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings github_team_settings}
*/
export class TeamSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_team_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamSettings to import
  * @param importFromId The id of the existing TeamSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.0/docs/resources/team_settings github_team_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: TeamSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team_settings',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.2.0',
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
    this._teamId = config.teamId;
    this._reviewRequestDelegation.internalValue = config.reviewRequestDelegation;
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // team_slug - computed: true, optional: false, required: false
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }

  // team_uid - computed: true, optional: false, required: false
  public get teamUid() {
    return this.getStringAttribute('team_uid');
  }

  // review_request_delegation - computed: false, optional: true, required: false
  private _reviewRequestDelegation = new TeamSettingsReviewRequestDelegationOutputReference(this, "review_request_delegation");
  public get reviewRequestDelegation() {
    return this._reviewRequestDelegation;
  }
  public putReviewRequestDelegation(value: TeamSettingsReviewRequestDelegation) {
    this._reviewRequestDelegation.internalValue = value;
  }
  public resetReviewRequestDelegation() {
    this._reviewRequestDelegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewRequestDelegationInput() {
    return this._reviewRequestDelegation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      team_id: cdktf.stringToTerraform(this._teamId),
      review_request_delegation: teamSettingsReviewRequestDelegationToTerraform(this._reviewRequestDelegation.internalValue),
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
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      review_request_delegation: {
        value: teamSettingsReviewRequestDelegationToHclTerraform(this._reviewRequestDelegation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamSettingsReviewRequestDelegationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
