# `workflowRepositoryPermissions` Submodule <a name="`workflowRepositoryPermissions` Submodule" id="@cdktf/provider-github.workflowRepositoryPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowRepositoryPermissions <a name="WorkflowRepositoryPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions github_workflow_repository_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/workflowrepositorypermissions"

workflowrepositorypermissions.NewWorkflowRepositoryPermissions(scope Construct, id *string, config WorkflowRepositoryPermissionsConfig) WorkflowRepositoryPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig">WorkflowRepositoryPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig">WorkflowRepositoryPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetCanApprovePullRequestReviews">ResetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetDefaultWorkflowPermissions">ResetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCanApprovePullRequestReviews` <a name="ResetCanApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetCanApprovePullRequestReviews"></a>

```go
func ResetCanApprovePullRequestReviews()
```

##### `ResetDefaultWorkflowPermissions` <a name="ResetDefaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetDefaultWorkflowPermissions"></a>

```go
func ResetDefaultWorkflowPermissions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkflowRepositoryPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/workflowrepositorypermissions"

workflowrepositorypermissions.WorkflowRepositoryPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/workflowrepositorypermissions"

workflowrepositorypermissions.WorkflowRepositoryPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/workflowrepositorypermissions"

workflowrepositorypermissions.WorkflowRepositoryPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/workflowrepositorypermissions"

workflowrepositorypermissions.WorkflowRepositoryPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkflowRepositoryPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkflowRepositoryPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkflowRepositoryPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkflowRepositoryPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviewsInput">CanApprovePullRequestReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissionsInput">DefaultWorkflowPermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="CanApprovePullRequestReviewsInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviewsInput"></a>

```go
func CanApprovePullRequestReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="DefaultWorkflowPermissionsInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissionsInput"></a>

```go
func DefaultWorkflowPermissionsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `CanApprovePullRequestReviews`<sup>Required</sup> <a name="CanApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviews"></a>

```go
func CanApprovePullRequestReviews() interface{}
```

- *Type:* interface{}

---

##### `DefaultWorkflowPermissions`<sup>Required</sup> <a name="DefaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissions"></a>

```go
func DefaultWorkflowPermissions() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowRepositoryPermissionsConfig <a name="WorkflowRepositoryPermissionsConfig" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/workflowrepositorypermissions"

&workflowrepositorypermissions.WorkflowRepositoryPermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	CanApprovePullRequestReviews: interface{},
	DefaultWorkflowPermissions: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.repository">Repository</a></code> | <code>*string</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>interface{}</code> | Whether GitHub Actions can approve pull requests. Enabling this can be a security risk. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>*string</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#repository WorkflowRepositoryPermissions#repository}

---

##### `CanApprovePullRequestReviews`<sup>Optional</sup> <a name="CanApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.canApprovePullRequestReviews"></a>

```go
CanApprovePullRequestReviews interface{}
```

- *Type:* interface{}

Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#can_approve_pull_request_reviews WorkflowRepositoryPermissions#can_approve_pull_request_reviews}

---

##### `DefaultWorkflowPermissions`<sup>Optional</sup> <a name="DefaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.defaultWorkflowPermissions"></a>

```go
DefaultWorkflowPermissions *string
```

- *Type:* *string

The default workflow permissions granted to the GITHUB_TOKEN when running workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#default_workflow_permissions WorkflowRepositoryPermissions#default_workflow_permissions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



