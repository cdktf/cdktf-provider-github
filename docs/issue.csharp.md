# `issue` Submodule <a name="`issue` Submodule" id="@cdktf/provider-github.issue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Issue <a name="Issue" id="@cdktf/provider-github.issue.Issue"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue github_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.issue.Issue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new Issue(Construct Scope, string Id, IssueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.issue.Issue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.issue.Issue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.issue.Issue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.issue.IssueConfig">IssueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.issue.Issue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.issue.Issue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.issue.Issue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.issue.IssueConfig">IssueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.issue.Issue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.issue.Issue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.issue.Issue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.issue.Issue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.issue.Issue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.issue.Issue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.issue.Issue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.issue.Issue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.issue.Issue.resetAssignees">ResetAssignees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.resetMilestoneNumber">ResetMilestoneNumber</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.issue.Issue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.issue.Issue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.issue.Issue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.issue.Issue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.issue.Issue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.issue.Issue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.issue.Issue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.issue.Issue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.issue.Issue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.issue.Issue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.issue.Issue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.issue.Issue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.issue.Issue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.issue.Issue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.issue.Issue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.issue.Issue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.issue.Issue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.issue.Issue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.issue.Issue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.issue.Issue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.issue.Issue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.issue.Issue.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.issue.Issue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.issue.Issue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.issue.Issue.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.issue.Issue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.issue.Issue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.issue.Issue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.issue.Issue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.issue.Issue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.issue.Issue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.issue.Issue.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.issue.Issue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.issue.Issue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssignees` <a name="ResetAssignees" id="@cdktf/provider-github.issue.Issue.resetAssignees"></a>

```csharp
private void ResetAssignees()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-github.issue.Issue.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.issue.Issue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-github.issue.Issue.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMilestoneNumber` <a name="ResetMilestoneNumber" id="@cdktf/provider-github.issue.Issue.resetMilestoneNumber"></a>

```csharp
private void ResetMilestoneNumber()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.issue.Issue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.issue.Issue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Issue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.issue.Issue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Issue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.issue.Issue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.issue.Issue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Issue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.issue.Issue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.issue.Issue.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Issue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.issue.Issue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.issue.Issue.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Issue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Issue resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.issue.Issue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.issue.Issue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Issue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.issue.Issue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Issue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.issue.Issue.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Issue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.issueId">IssueId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.assigneesInput">AssigneesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.milestoneNumberInput">MilestoneNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.assignees">Assignees</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.milestoneNumber">MilestoneNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.issue.Issue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.issue.Issue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.issue.Issue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.issue.Issue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.issue.Issue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.issue.Issue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.issue.Issue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.issue.Issue.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.issue.Issue.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.issue.Issue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.issue.Issue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.issue.Issue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.issue.Issue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.issue.Issue.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.issue.Issue.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IssueId`<sup>Required</sup> <a name="IssueId" id="@cdktf/provider-github.issue.Issue.property.issueId"></a>

```csharp
public double IssueId { get; }
```

- *Type:* double

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-github.issue.Issue.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `AssigneesInput`<sup>Optional</sup> <a name="AssigneesInput" id="@cdktf/provider-github.issue.Issue.property.assigneesInput"></a>

```csharp
public string[] AssigneesInput { get; }
```

- *Type:* string[]

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-github.issue.Issue.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.issue.Issue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-github.issue.Issue.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `MilestoneNumberInput`<sup>Optional</sup> <a name="MilestoneNumberInput" id="@cdktf/provider-github.issue.Issue.property.milestoneNumberInput"></a>

```csharp
public double MilestoneNumberInput { get; }
```

- *Type:* double

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.issue.Issue.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-github.issue.Issue.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Assignees`<sup>Required</sup> <a name="Assignees" id="@cdktf/provider-github.issue.Issue.property.assignees"></a>

```csharp
public string[] Assignees { get; }
```

- *Type:* string[]

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-github.issue.Issue.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.issue.Issue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-github.issue.Issue.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `MilestoneNumber`<sup>Required</sup> <a name="MilestoneNumber" id="@cdktf/provider-github.issue.Issue.property.milestoneNumber"></a>

```csharp
public double MilestoneNumber { get; }
```

- *Type:* double

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.issue.Issue.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-github.issue.Issue.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.issue.Issue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.issue.Issue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IssueConfig <a name="IssueConfig" id="@cdktf/provider-github.issue.IssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.issue.IssueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new IssueConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Repository,
    string Title,
    string[] Assignees = null,
    string Body = null,
    string Id = null,
    string[] Labels = null,
    double MilestoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.repository">Repository</a></code> | <code>string</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.title">Title</a></code> | <code>string</code> | Title of the issue. |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.assignees">Assignees</a></code> | <code>string[]</code> | List of Logins to assign to the issue. |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.body">Body</a></code> | <code>string</code> | Body of the issue. |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#id Issue#id}. |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.labels">Labels</a></code> | <code>string[]</code> | List of labels to attach to the issue. |
| <code><a href="#@cdktf/provider-github.issue.IssueConfig.property.milestoneNumber">MilestoneNumber</a></code> | <code>double</code> | Milestone number to assign to the issue. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.issue.IssueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.issue.IssueConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.issue.IssueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.issue.IssueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.issue.IssueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.issue.IssueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.issue.IssueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.issue.IssueConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#repository Issue#repository}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-github.issue.IssueConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#title Issue#title}

---

##### `Assignees`<sup>Optional</sup> <a name="Assignees" id="@cdktf/provider-github.issue.IssueConfig.property.assignees"></a>

```csharp
public string[] Assignees { get; set; }
```

- *Type:* string[]

List of Logins to assign to the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#assignees Issue#assignees}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-github.issue.IssueConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Body of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#body Issue#body}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.issue.IssueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#id Issue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-github.issue.IssueConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

List of labels to attach to the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#labels Issue#labels}

---

##### `MilestoneNumber`<sup>Optional</sup> <a name="MilestoneNumber" id="@cdktf/provider-github.issue.IssueConfig.property.milestoneNumber"></a>

```csharp
public double MilestoneNumber { get; set; }
```

- *Type:* double

Milestone number to assign to the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/issue#milestone_number Issue#milestone_number}

---



