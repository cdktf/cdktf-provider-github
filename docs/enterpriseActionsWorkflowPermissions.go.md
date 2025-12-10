# `enterpriseActionsWorkflowPermissions` Submodule <a name="`enterpriseActionsWorkflowPermissions` Submodule" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsWorkflowPermissions <a name="EnterpriseActionsWorkflowPermissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionsworkflowpermissions"

enterpriseactionsworkflowpermissions.NewEnterpriseActionsWorkflowPermissions(scope Construct, id *string, config EnterpriseActionsWorkflowPermissionsConfig) EnterpriseActionsWorkflowPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig">EnterpriseActionsWorkflowPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig">EnterpriseActionsWorkflowPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetCanApprovePullRequestReviews">ResetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetDefaultWorkflowPermissions">ResetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCanApprovePullRequestReviews` <a name="ResetCanApprovePullRequestReviews" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetCanApprovePullRequestReviews"></a>

```go
func ResetCanApprovePullRequestReviews()
```

##### `ResetDefaultWorkflowPermissions` <a name="ResetDefaultWorkflowPermissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetDefaultWorkflowPermissions"></a>

```go
func ResetDefaultWorkflowPermissions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseActionsWorkflowPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionsworkflowpermissions"

enterpriseactionsworkflowpermissions.EnterpriseActionsWorkflowPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionsworkflowpermissions"

enterpriseactionsworkflowpermissions.EnterpriseActionsWorkflowPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionsworkflowpermissions"

enterpriseactionsworkflowpermissions.EnterpriseActionsWorkflowPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionsworkflowpermissions"

enterpriseactionsworkflowpermissions.EnterpriseActionsWorkflowPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EnterpriseActionsWorkflowPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnterpriseActionsWorkflowPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnterpriseActionsWorkflowPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsWorkflowPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviewsInput">CanApprovePullRequestReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissionsInput">DefaultWorkflowPermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlugInput">EnterpriseSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="CanApprovePullRequestReviewsInput" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviewsInput"></a>

```go
func CanApprovePullRequestReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="DefaultWorkflowPermissionsInput" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissionsInput"></a>

```go
func DefaultWorkflowPermissionsInput() *string
```

- *Type:* *string

---

##### `EnterpriseSlugInput`<sup>Optional</sup> <a name="EnterpriseSlugInput" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlugInput"></a>

```go
func EnterpriseSlugInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CanApprovePullRequestReviews`<sup>Required</sup> <a name="CanApprovePullRequestReviews" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.canApprovePullRequestReviews"></a>

```go
func CanApprovePullRequestReviews() interface{}
```

- *Type:* interface{}

---

##### `DefaultWorkflowPermissions`<sup>Required</sup> <a name="DefaultWorkflowPermissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.defaultWorkflowPermissions"></a>

```go
func DefaultWorkflowPermissions() *string
```

- *Type:* *string

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.enterpriseSlug"></a>

```go
func EnterpriseSlug() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsWorkflowPermissionsConfig <a name="EnterpriseActionsWorkflowPermissionsConfig" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/enterpriseactionsworkflowpermissions"

&enterpriseactionsworkflowpermissions.EnterpriseActionsWorkflowPermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnterpriseSlug: *string,
	CanApprovePullRequestReviews: interface{},
	DefaultWorkflowPermissions: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>interface{}</code> | Whether GitHub Actions can approve pull request reviews. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>*string</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.enterpriseSlug"></a>

```go
EnterpriseSlug *string
```

- *Type:* *string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#enterprise_slug EnterpriseActionsWorkflowPermissions#enterprise_slug}

---

##### `CanApprovePullRequestReviews`<sup>Optional</sup> <a name="CanApprovePullRequestReviews" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.canApprovePullRequestReviews"></a>

```go
CanApprovePullRequestReviews interface{}
```

- *Type:* interface{}

Whether GitHub Actions can approve pull request reviews.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#can_approve_pull_request_reviews EnterpriseActionsWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `DefaultWorkflowPermissions`<sup>Optional</sup> <a name="DefaultWorkflowPermissions" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.defaultWorkflowPermissions"></a>

```go
DefaultWorkflowPermissions *string
```

- *Type:* *string

The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#default_workflow_permissions EnterpriseActionsWorkflowPermissions#default_workflow_permissions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.enterpriseActionsWorkflowPermissions.EnterpriseActionsWorkflowPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



