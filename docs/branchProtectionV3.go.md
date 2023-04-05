# `branchProtectionV3` Submodule <a name="`branchProtectionV3` Submodule" id="@cdktf/provider-github.branchProtectionV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtectionV3 <a name="BranchProtectionV3" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3 github_branch_protection_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.NewBranchProtectionV3(scope Construct, id *string, config BranchProtectionV3Config) BranchProtectionV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config">BranchProtectionV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config">BranchProtectionV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews">PutRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks">PutRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins">ResetEnforceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution">ResetRequireConversationResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews">ResetRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks">ResetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits">ResetRequireSignedCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions">ResetRestrictions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRequiredPullRequestReviews` <a name="PutRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews"></a>

```go
func PutRequiredPullRequestReviews(value BranchProtectionV3RequiredPullRequestReviews)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks"></a>

```go
func PutRequiredStatusChecks(value BranchProtectionV3RequiredStatusChecks)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions"></a>

```go
func PutRestrictions(value BranchProtectionV3Restrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `ResetEnforceAdmins` <a name="ResetEnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins"></a>

```go
func ResetEnforceAdmins()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId"></a>

```go
func ResetId()
```

##### `ResetRequireConversationResolution` <a name="ResetRequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution"></a>

```go
func ResetRequireConversationResolution()
```

##### `ResetRequiredPullRequestReviews` <a name="ResetRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews"></a>

```go
func ResetRequiredPullRequestReviews()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks"></a>

```go
func ResetRequiredStatusChecks()
```

##### `ResetRequireSignedCommits` <a name="ResetRequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits"></a>

```go
func ResetRequireSignedCommits()
```

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions"></a>

```go
func ResetRestrictions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.BranchProtectionV3_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.BranchProtectionV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.BranchProtectionV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput">EnforceAdminsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput">RequireConversationResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput">RequiredPullRequestReviewsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput">RequireSignedCommitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins">EnforceAdmins</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `RequiredPullRequestReviews`<sup>Required</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews"></a>

```go
func RequiredPullRequestReviews() BranchProtectionV3RequiredPullRequestReviewsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks"></a>

```go
func RequiredStatusChecks() BranchProtectionV3RequiredStatusChecksOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a>

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions"></a>

```go
func Restrictions() BranchProtectionV3RestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a>

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `EnforceAdminsInput`<sup>Optional</sup> <a name="EnforceAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput"></a>

```go
func EnforceAdminsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RequireConversationResolutionInput`<sup>Optional</sup> <a name="RequireConversationResolutionInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput"></a>

```go
func RequireConversationResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredPullRequestReviewsInput`<sup>Optional</sup> <a name="RequiredPullRequestReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput"></a>

```go
func RequiredPullRequestReviewsInput() BranchProtectionV3RequiredPullRequestReviews
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput"></a>

```go
func RequiredStatusChecksInput() BranchProtectionV3RequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `RequireSignedCommitsInput`<sup>Optional</sup> <a name="RequireSignedCommitsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput"></a>

```go
func RequireSignedCommitsInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput"></a>

```go
func RestrictionsInput() BranchProtectionV3Restrictions
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `EnforceAdmins`<sup>Required</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins"></a>

```go
func EnforceAdmins() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RequireConversationResolution`<sup>Required</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution"></a>

```go
func RequireConversationResolution() interface{}
```

- *Type:* interface{}

---

##### `RequireSignedCommits`<sup>Required</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits"></a>

```go
func RequireSignedCommits() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionV3Config <a name="BranchProtectionV3Config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

&branchprotectionv3.BranchProtectionV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Branch: *string,
	Repository: *string,
	EnforceAdmins: interface{},
	Id: *string,
	RequireConversationResolution: interface{},
	RequiredPullRequestReviews: github.com/cdktf/cdktf-provider-github-go/github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews,
	RequiredStatusChecks: github.com/cdktf/cdktf-provider-github-go/github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks,
	RequireSignedCommits: interface{},
	Restrictions: github.com/cdktf/cdktf-provider-github-go/github.branchProtectionV3.BranchProtectionV3Restrictions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch">Branch</a></code> | <code>*string</code> | The Git branch to protect. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository">Repository</a></code> | <code>*string</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins">EnforceAdmins</a></code> | <code>interface{}</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>interface{}</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>interface{}</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | restrictions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The Git branch to protect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#branch BranchProtectionV3#branch}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The GitHub repository name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#repository BranchProtectionV3#repository}

---

##### `EnforceAdmins`<sup>Optional</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins"></a>

```go
EnforceAdmins interface{}
```

- *Type:* interface{}

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequireConversationResolution`<sup>Optional</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution"></a>

```go
RequireConversationResolution interface{}
```

- *Type:* interface{}

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}

---

##### `RequiredPullRequestReviews`<sup>Optional</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews"></a>

```go
RequiredPullRequestReviews BranchProtectionV3RequiredPullRequestReviews
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks"></a>

```go
RequiredStatusChecks BranchProtectionV3RequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}

---

##### `RequireSignedCommits`<sup>Optional</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits"></a>

```go
RequireSignedCommits interface{}
```

- *Type:* interface{}

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions"></a>

```go
Restrictions BranchProtectionV3Restrictions
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#restrictions BranchProtectionV3#restrictions}

---

### BranchProtectionV3RequiredPullRequestReviews <a name="BranchProtectionV3RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

&branchprotectionv3.BranchProtectionV3RequiredPullRequestReviews {
	BypassPullRequestAllowances: github.com/cdktf/cdktf-provider-github-go/github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances,
	DismissalTeams: *[]*string,
	DismissalUsers: *[]*string,
	DismissStaleReviews: interface{},
	IncludeAdmins: interface{},
	RequireCodeOwnerReviews: interface{},
	RequiredApprovingReviewCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances">BypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | bypass_pull_request_allowances block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams">DismissalTeams</a></code> | <code>*[]*string</code> | The list of team slugs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers">DismissalUsers</a></code> | <code>*[]*string</code> | The list of user logins with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>interface{}</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins">IncludeAdmins</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>interface{}</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>*f64</code> | Require 'x' number of approvals to satisfy branch protection requirements. |

---

##### `BypassPullRequestAllowances`<sup>Optional</sup> <a name="BypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances"></a>

```go
BypassPullRequestAllowances BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

bypass_pull_request_allowances block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}

---

##### `DismissalTeams`<sup>Optional</sup> <a name="DismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams"></a>

```go
DismissalTeams *[]*string
```

- *Type:* *[]*string

The list of team slugs with dismissal access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}

---

##### `DismissalUsers`<sup>Optional</sup> <a name="DismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers"></a>

```go
DismissalUsers *[]*string
```

- *Type:* *[]*string

The list of user logins with dismissal access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}

---

##### `DismissStaleReviews`<sup>Optional</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews"></a>

```go
DismissStaleReviews interface{}
```

- *Type:* interface{}

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}

---

##### `IncludeAdmins`<sup>Optional</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins"></a>

```go
IncludeAdmins interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `RequireCodeOwnerReviews`<sup>Optional</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```go
RequireCodeOwnerReviews interface{}
```

- *Type:* interface{}

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```go
RequiredApprovingReviewCount *f64
```

- *Type:* *f64

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}

---

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

&branchprotectionv3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances {
	Apps: *[]*string,
	Teams: *[]*string,
	Users: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps">Apps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams">Teams</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users">Users</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}. |

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps"></a>

```go
Apps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams"></a>

```go
Teams *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}.

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users"></a>

```go
Users *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}.

---

### BranchProtectionV3RequiredStatusChecks <a name="BranchProtectionV3RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

&branchprotectionv3.BranchProtectionV3RequiredStatusChecks {
	Checks: *[]*string,
	Contexts: *[]*string,
	IncludeAdmins: interface{},
	Strict: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks">Checks</a></code> | <code>*[]*string</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts">Contexts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins">IncludeAdmins</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict">Strict</a></code> | <code>interface{}</code> | Require branches to be up to date before merging. |

---

##### `Checks`<sup>Optional</sup> <a name="Checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks"></a>

```go
Checks *[]*string
```

- *Type:* *[]*string

The list of status checks to require in order to merge into this branch.

No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#checks BranchProtectionV3#checks}

---

##### `Contexts`<sup>Optional</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts"></a>

```go
Contexts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}.

---

##### `IncludeAdmins`<sup>Optional</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins"></a>

```go
IncludeAdmins interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict"></a>

```go
Strict interface{}
```

- *Type:* interface{}

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#strict BranchProtectionV3#strict}

---

### BranchProtectionV3Restrictions <a name="BranchProtectionV3Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

&branchprotectionv3.BranchProtectionV3Restrictions {
	Apps: *[]*string,
	Teams: *[]*string,
	Users: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps">Apps</a></code> | <code>*[]*string</code> | The list of app slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams">Teams</a></code> | <code>*[]*string</code> | The list of team slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users">Users</a></code> | <code>*[]*string</code> | The list of user logins with push access. |

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps"></a>

```go
Apps *[]*string
```

- *Type:* *[]*string

The list of app slugs with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams"></a>

```go
Teams *[]*string
```

- *Type:* *[]*string

The list of team slugs with push access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users"></a>

```go
Users *[]*string
```

- *Type:* *[]*string

The list of user logins with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.NewBranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApps` <a name="ResetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps"></a>

```go
func ResetApps()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams"></a>

```go
func ResetTeams()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers"></a>

```go
func ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput">AppsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput">TeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput">UsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps">Apps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams">Teams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users">Users</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput"></a>

```go
func AppsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput"></a>

```go
func TeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput"></a>

```go
func UsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps"></a>

```go
func Apps() *[]*string
```

- *Type:* *[]*string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams"></a>

```go
func Teams() *[]*string
```

- *Type:* *[]*string

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users"></a>

```go
func Users() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue"></a>

```go
func InternalValue() BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---


### BranchProtectionV3RequiredPullRequestReviewsOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.NewBranchProtectionV3RequiredPullRequestReviewsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BranchProtectionV3RequiredPullRequestReviewsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances">PutBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances">ResetBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams">ResetDismissalTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers">ResetDismissalUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">ResetDismissStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins">ResetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">ResetRequireCodeOwnerReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">ResetRequiredApprovingReviewCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBypassPullRequestAllowances` <a name="PutBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances"></a>

```go
func PutBypassPullRequestAllowances(value BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `ResetBypassPullRequestAllowances` <a name="ResetBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances"></a>

```go
func ResetBypassPullRequestAllowances()
```

##### `ResetDismissalTeams` <a name="ResetDismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams"></a>

```go
func ResetDismissalTeams()
```

##### `ResetDismissalUsers` <a name="ResetDismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers"></a>

```go
func ResetDismissalUsers()
```

##### `ResetDismissStaleReviews` <a name="ResetDismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```go
func ResetDismissStaleReviews()
```

##### `ResetIncludeAdmins` <a name="ResetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins"></a>

```go
func ResetIncludeAdmins()
```

##### `ResetRequireCodeOwnerReviews` <a name="ResetRequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```go
func ResetRequireCodeOwnerReviews()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```go
func ResetRequiredApprovingReviewCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances">BypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput">BypassPullRequestAllowancesInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput">DismissalTeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput">DismissalUsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">DismissStaleReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput">IncludeAdminsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">RequireCodeOwnerReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams">DismissalTeams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers">DismissalUsers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins">IncludeAdmins</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassPullRequestAllowances`<sup>Required</sup> <a name="BypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances"></a>

```go
func BypassPullRequestAllowances() BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a>

---

##### `BypassPullRequestAllowancesInput`<sup>Optional</sup> <a name="BypassPullRequestAllowancesInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput"></a>

```go
func BypassPullRequestAllowancesInput() BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `DismissalTeamsInput`<sup>Optional</sup> <a name="DismissalTeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput"></a>

```go
func DismissalTeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DismissalUsersInput`<sup>Optional</sup> <a name="DismissalUsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput"></a>

```go
func DismissalUsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DismissStaleReviewsInput`<sup>Optional</sup> <a name="DismissStaleReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```go
func DismissStaleReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeAdminsInput`<sup>Optional</sup> <a name="IncludeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput"></a>

```go
func IncludeAdminsInput() interface{}
```

- *Type:* interface{}

---

##### `RequireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```go
func RequireCodeOwnerReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```go
func RequiredApprovingReviewCountInput() *f64
```

- *Type:* *f64

---

##### `DismissalTeams`<sup>Required</sup> <a name="DismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams"></a>

```go
func DismissalTeams() *[]*string
```

- *Type:* *[]*string

---

##### `DismissalUsers`<sup>Required</sup> <a name="DismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers"></a>

```go
func DismissalUsers() *[]*string
```

- *Type:* *[]*string

---

##### `DismissStaleReviews`<sup>Required</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```go
func DismissStaleReviews() interface{}
```

- *Type:* interface{}

---

##### `IncludeAdmins`<sup>Required</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins"></a>

```go
func IncludeAdmins() interface{}
```

- *Type:* interface{}

---

##### `RequireCodeOwnerReviews`<sup>Required</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```go
func RequireCodeOwnerReviews() interface{}
```

- *Type:* interface{}

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```go
func RequiredApprovingReviewCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```go
func InternalValue() BranchProtectionV3RequiredPullRequestReviews
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---


### BranchProtectionV3RequiredStatusChecksOutputReference <a name="BranchProtectionV3RequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.NewBranchProtectionV3RequiredStatusChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BranchProtectionV3RequiredStatusChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks">ResetChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts">ResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins">ResetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict">ResetStrict</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChecks` <a name="ResetChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks"></a>

```go
func ResetChecks()
```

##### `ResetContexts` <a name="ResetContexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts"></a>

```go
func ResetContexts()
```

##### `ResetIncludeAdmins` <a name="ResetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins"></a>

```go
func ResetIncludeAdmins()
```

##### `ResetStrict` <a name="ResetStrict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict"></a>

```go
func ResetStrict()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput">ChecksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput">ContextsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput">IncludeAdminsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput">StrictInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks">Checks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts">Contexts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins">IncludeAdmins</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict">Strict</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChecksInput`<sup>Optional</sup> <a name="ChecksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput"></a>

```go
func ChecksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContextsInput`<sup>Optional</sup> <a name="ContextsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput"></a>

```go
func ContextsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeAdminsInput`<sup>Optional</sup> <a name="IncludeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput"></a>

```go
func IncludeAdminsInput() interface{}
```

- *Type:* interface{}

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput"></a>

```go
func StrictInput() interface{}
```

- *Type:* interface{}

---

##### `Checks`<sup>Required</sup> <a name="Checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks"></a>

```go
func Checks() *[]*string
```

- *Type:* *[]*string

---

##### `Contexts`<sup>Required</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts"></a>

```go
func Contexts() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeAdmins`<sup>Required</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins"></a>

```go
func IncludeAdmins() interface{}
```

- *Type:* interface{}

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict"></a>

```go
func Strict() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() BranchProtectionV3RequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---


### BranchProtectionV3RestrictionsOutputReference <a name="BranchProtectionV3RestrictionsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotectionv3"

branchprotectionv3.NewBranchProtectionV3RestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BranchProtectionV3RestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApps` <a name="ResetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps"></a>

```go
func ResetApps()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams"></a>

```go
func ResetTeams()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers"></a>

```go
func ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput">AppsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput">TeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput">UsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps">Apps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams">Teams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users">Users</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput"></a>

```go
func AppsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput"></a>

```go
func TeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput"></a>

```go
func UsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps"></a>

```go
func Apps() *[]*string
```

- *Type:* *[]*string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams"></a>

```go
func Teams() *[]*string
```

- *Type:* *[]*string

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users"></a>

```go
func Users() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BranchProtectionV3Restrictions
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---



